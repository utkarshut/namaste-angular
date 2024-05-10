import { createSelector, createFeatureSelector } from '@ngrx/store';

const selectAuthState = createFeatureSelector<{ auth: { user: string } }>('auth');
export const selectUser = createSelector(selectAuthState, (state) => state.auth);