import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhoneBook.module.css';

const Filter = ({ onChange }) => (
    <>
        <label className={styles.filter}>
            <span className={styles.text}>Find contacts by name</span>
            <input
                className={styles.filter__input}
                type="text"
                name="filter"
                onChange={onChange}
            />
        </label>
    </>
);

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;
