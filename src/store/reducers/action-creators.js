import {AuthActionCreators} from './auth/actionCreators.js';
import {EventActionCreators} from './event/actionCreators.js';

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
}
