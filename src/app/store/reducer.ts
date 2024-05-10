import { createReducer, on } from '@ngrx/store';
import { login } from './action';

export const initialState = {
  user: null, // Initial user value is null,
  password: null,
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state: any, data: any) => {
    return {
      ...state,
      user: data.user,
      password: data.password,
    };
  })
);
