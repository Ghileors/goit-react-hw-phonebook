import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import Notification from '../Notification/Notification';
import contactsActions from '../../redux/contacts/contactsActions';

import style from './ContactForm.module.scss';
import AppearStyles from './AppearStyles.module.scss';

import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
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
        const existingContacts = this.props.contacts.map(cont => cont.name);
        const newName = this.state.name;

        existingContacts.includes(newName) && this.showNotification();

        this.props.onAddContact({
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
        setTimeout(() => this.setState({ existingContact: false }), 2000);
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

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
});

const mapDispatchToProps = {
    onAddContact: contactsActions.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
