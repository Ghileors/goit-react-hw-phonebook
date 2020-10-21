import { createAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', contact => ({
    payload: {
        contact: {
            id: uuidv4(),
            name: contact.name,
            number: contact.number,
        },
    },
}));

const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, removeContact, changeFilter };
