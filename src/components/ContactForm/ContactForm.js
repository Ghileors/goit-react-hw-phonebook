import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import contactsSelectors from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';

import Notification from '../Notification/Notification';

import style from './ContactForm.module.scss';
import AppearStyles from './AppearStyles.module.scss';
class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        existingContact: false,
        errorMessage: '',
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
        const existedContacts = this.props.contacts.map(contact =>
            contact.name.toLowerCase(),
        );
        if (existedContacts.includes(name.toLowerCase())) {
            this.showNotification(`${name} is already on the list!`);
        } else if (!name || !number) {
            this.showNotification('You are trying to add an empty field!');
        } else {
            this.props.onAddContact({
                name: name,
                number: number,
            });
        }

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
    contacts: contactsSelectors.getContacts(state),
});
const mapDispatchToProps = {
    onAddContact: contactsOperations.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
