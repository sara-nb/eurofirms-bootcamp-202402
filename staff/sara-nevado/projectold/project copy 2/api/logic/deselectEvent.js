import { User, Event } from '../data/index.js';
import { validate, errors } from 'com';
import mongoose from 'mongoose';

const { SystemError, MatchError } = errors;
const { ObjectId } = mongoose.Types;

function deselectEvent(userId, eventId) {
    validate.id(userId, 'userId');
    validate.id(eventId, 'eventId');

    return (async () => {
        let user

        try {
            user = await User.findById(userId).lean();
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!user)
            throw new MatchError('User not found')

        let event

        try {
            event = await Event.findById(eventId).lean();
        } catch (error) {
            throw new SystemError(error.message);
        }

        if (!event)
            throw new MatchError('Event not found');

        const userObjectId = new ObjectId(userId)

        const isSubscribed = event.subscribers.some(subscriberId => subscriberId.equals(userObjectId));

        if (!isSubscribed)
            throw new MatchError('User is not subscribed to this event');

        const eventObjectId = new ObjectId(eventId)

        let updateResult

        try {
            updateResult = await Event.updateOne(
                { _id: eventObjectId },
                { $pull: { subscribers: userObjectId } }
            );
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (updateResult.nModified === 0)
            throw new SystemError('Failed to update the event. No documents were modified');
    })()
}

export default deselectEvent;




// Buscar el evento
// Comprobar que el evento seleccionado exista
// Comprobar que el usuario está suscrito
// Actualizar el evento para quitar el usuario de los suscriptores
// Quitar usuario de la lista
// Verificar que la actualización tuvo efecto