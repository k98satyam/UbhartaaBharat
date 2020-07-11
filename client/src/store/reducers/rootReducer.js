import authReducer from './authReducer'
import projectReducer from './projectReducer'
import donateReducer from './donateReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { storage } from '../../config/fbConfig'

const rootReducer = combineReducers({
    auth : authReducer,
    project : projectReducer,
    donateProject : donateReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default rootReducer