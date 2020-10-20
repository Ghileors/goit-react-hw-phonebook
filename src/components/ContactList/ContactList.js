import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactItem from '../ContactItem';

import AppearStyles from './AppearStyles.module.scss';
import style from './ContactList.module.scss';

export default function ContactList({ contacts, onRemoveContact }) {
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
                            <ContactItem
                                onRemoveContact={onRemoveContact}
                                contact={contact}
                                key={contact.id}
                            />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </>
    );
}
