import React from 'react';
import PropTypes from 'prop-types';
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

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
