import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import Section from '../Section';

import styles from './PhoneBook.module.css';

class ContactForm extends Component {
    state = { name: '', number: '' };

    changeHandler = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });
    };

    submitHandler = event => {
        event.preventDefault();
        const { name, number } = this.state;
        const contact = {
            id: uuidv4(),
            name: name,
            number: number,
        };
        this.props.onAddContact(contact);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <Section title="Phonebook">
                <form
                    className={styles.contact__form}
                    onSubmit={this.submitHandler}
                >
                    <label className={styles.label}>
                        <span className={styles.text}>Name</span>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter name..."
                            onChange={this.changeHandler}
                        />
                    </label>
                    <label className={styles.label}>
                        <span className={styles.text}>Number</span>
                        <input
                            type="tel"
                            name="number"
                            value={number}
                            placeholder="Enter number..."
                            onChange={this.changeHandler}
                        />
                    </label>
                    <button
                        className={styles.button}
                        type="submit"
                        disabled={!name.length || !number.length}
                    >
                        Add contact
                    </button>
                </form>
            </Section>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;