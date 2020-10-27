import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    changeFilter,
} from './contacts-actions';

const contactReducer = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [removeContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [removeContactRequest]: () => true,
    [removeContactSuccess]: () => false,
    [removeContactError]: () => false,
});

export default combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
    loading,
});
