import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducers';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});

export default store;
