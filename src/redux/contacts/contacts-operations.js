import axios from 'axios';

import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactsActions.removeContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(contactsActions.removeContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.removeContactError(error));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
