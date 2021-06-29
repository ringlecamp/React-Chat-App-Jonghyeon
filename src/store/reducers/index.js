import { combineReducers } from 'redux';
import user from './user';

export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogOut = () => ({
  type: USER_LOGOUT,
});

const appReducer = combineReducers({
  user,
});

const reducers = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default reducers;

//TODO: Convert Redux in JavaScript to TypeScript
