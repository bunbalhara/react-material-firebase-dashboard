import { combineReducers } from 'redux';
import authUser from './authReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';
import {reducer as toaStrReducer} from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux'

const mainReducers =
  combineReducers({
    auth:authUser,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    toaStr: toaStrReducer,
    routing: routerReducer,
  });

export default mainReducers;
