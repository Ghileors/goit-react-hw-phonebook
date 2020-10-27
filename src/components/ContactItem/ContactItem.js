import React from 'react';
import { connect } from 'react-redux';

import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import Button from '../Button/Button';

import style from './ContactItem.module.scss';

const ContactItem = ({ contact = {}, onRemoveContact }) => {
    return (
        <li className={style.ContactItem}>
            {contact.name}: {contact.number}
            <Button id={contact.id} onRemove={onRemoveContact}></Button>
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
    onRemoveContact: () =>
        dispach(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
