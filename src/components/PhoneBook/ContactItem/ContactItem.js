import React from 'react';
import { connect } from 'react-redux';

import { contactsSelectors, contactsOperations } from '../../../redux/contacts';

import style from './ContactItem.module.scss';

const ContactItem = ({ contact = {}, onRemoveContact }) => {
  return (
    <li className={style.ContactItem}>
      {contact.name}: {contact.number}
      <button
        className={style.ContactItemBtn}
        id={contact.id}
        onClick={onRemoveContact}
      >
        ✕
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return {
    contact,
  };
};

const mapDispatchToProps = (dispach, ownProps) => ({
  onRemoveContact: () => dispach(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
