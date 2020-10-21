import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';

import AppearStyles from './AppearStyles.module.scss';
import style from './ContactList.module.scss';

const ContactList = ({ contacts }) => {
    return (
        <>
            <TransitionGroup component="ul" className={style.ContactList}>
                {contacts.length > 0 &&
                    contacts.map(contact => (
                        <CSSTransition
                            timeout={200}
                            key={contact.id}
                            classNames={AppearStyles}
                        >
                            <ContactItem key={contact.id} id={contact.id} />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </>
    );
};
const mapStateToProps = state => {
    const { contacts, filter } = state.contacts;
    const visibleContacts = contacts.filter(
        contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter),
    );
    return {
        contacts: visibleContacts,
    };
};
export default connect(mapStateToProps)(ContactList);
