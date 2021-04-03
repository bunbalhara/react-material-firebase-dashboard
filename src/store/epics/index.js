import {combineEpics} from 'redux-observable';
import {login} from './authEpic';

export default combineEpics(login);
