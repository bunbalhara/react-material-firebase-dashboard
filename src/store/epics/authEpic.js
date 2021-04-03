import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs';
import * as Actions from '../actions';
import axios from 'axios';
const req = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (action, state) => {
  return action.ofType(Actions.AUTH_USER_LOGIN).mergeMap(({payload}) => {
    return new Observable(async (observer) => {
      req.post('/authz', payload).then(res=>{
        if(res.data.statusCode === 200){
          observer.next({
            type: Actions.AUTH_USER_LOGIN_SUCCESS,
            payload: res.data.body,
          })
        }else {
          observer.next({
            type: Actions.AUTH_USER_LOGIN_FAILED,
            error: res.data.body.description,
          })
        }
      })
    });
  });
};

