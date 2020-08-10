import React from 'react';
import styles from './PhoneBook.module.css';

const ContactItem = ({ name, number, onDelete }) => {
    return (
        <li className={styles.list__item}>
            <p className={styles.contact__info}>
                {name} : {number}
            </p>
            <button className={styles.button} type="button" onClick={onDelete}>
                Delete contact
            </button>
        </li>
    );
};

export default ContactItem;
