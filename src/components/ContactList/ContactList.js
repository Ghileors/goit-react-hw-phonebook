import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

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

const mapStateToProps = state => ({
    contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
