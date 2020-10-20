import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { CSSTransition } from 'react-transition-group';

import Notification from '../Notification';

import AppearStyles from './AppearStyles.module.scss';
import style from './ContactForm.module.scss';

import { v4 as uuidv4 } from 'uuid';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        existingContact: false,
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;

        const existedContacts = this.props.appState.contacts.map(
            contact => contact.name,
        );

        const newName = this.state.name;
        existedContacts.includes(newName) && this.showNotification();
        this.props.onSubmit({
            id: uuidv4(),
            name: name,
            number: number,
        });

        this.setState({
            name: '',
            number: '',
        });
    };

    showNotification = () => {
        this.setState({ existingContact: true });
        setTimeout(() => this.setState({ existingContact: false }), 5000);
    };

    render() {
        const { name, number, existingContact } = this.state;

        return (
            <>
                <CSSTransition
                    in={existingContact}
                    classNames={AppearStyles}
                    unmountOnExit
                    timeout={200}
                >
                    <Notification />
                </CSSTransition>
                <form
                    className={style.ContactForm}
                    onSubmit={this.handleSubmit}
                >
                    <label className={style.nameLabel}>
                        <input
                            className={style.nameInput}
                            onChange={this.handleChange}
                            placeholder="Enter name..."
                            value={name}
                            type="text"
                            name="name"
                            autoFocus
                        />
                    </label>

                    <label>
                        <NumberFormat
                            className={style.numberInput}
                            format="###-##-##"
                            onChange={this.handleChange}
                            placeholder="Enter phone Number..."
                            value={number}
                            name="number"
                            mask=""
                        />
                    </label>

                    <button className={style.addButton} type="submit"></button>
                </form>
            </>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    existingContact: PropTypes.bool,
};
