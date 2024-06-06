import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import registerAdmin from './registerAdmin'
import createEvent from './createEvent'
import editEvent from './editEvent'
import deleteEvent from './deleteEvent'
import selectEvent from './selectEvent'
import deselectEvent from './deselectEvent'
import retrieveEvent from './retrieveEvent'
import retrieveEvents from './retrieveEvents'



const logic = {
    getLoggedInUserId,
    isUserLoggedIn,
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    registerAdmin,
    createEvent,
    editEvent,
    deleteEvent,
    selectEvent,
    deselectEvent,
    retrieveEvent,
    retrieveEvents
}

export default logic
