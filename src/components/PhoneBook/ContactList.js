import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section';
import ContactItem from './ContactItem';

import styles from './PhoneBook.module.css';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <Section title="Contacts">
            {contacts ? (
                <ul className={styles.contact__list}>
                    {contacts.map(({ id, name, number }) => (
                        <ContactItem
                            key={id}
                            name={name}
                            number={number}
                            onDelete={() => onDelete(id)}
                        />
                    ))}
                </ul>
            ) : (
                <p> No contact with such name in your phone </p>
            )}
        </Section>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }),
        ),
        PropTypes.array,
    ]),
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;
