import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

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
    const contact = state.contacts.contacts.find(
        contact => contact.id === ownProps.id,
    );

    return {
        contact,
    };
};

const mapDispatchToProps = (dispach, ownProps) => ({
    onRemoveContact: () => dispach(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
