import React from 'react';
import ContactItem from './ContactItem';
import styles from './PhoneBook.module.css';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={styles.contact__list}>
            {contacts && contacts.length ? (
                contacts.map(({ id, name, number }) => (
                    <ContactItem
                        key={id}
                        name={name}
                        number={number}
                        onDelete={() => onDelete(id)}
                    />
                ))
            ) : (
                <p> No contact with such name in your phone </p>
            )}
        </ul>
    );
};

export default ContactList;
