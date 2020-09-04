import React, { Component } from 'react';

import ContactForm from './components/PhoneBook/ContactForm';
import ContactList from './components/PhoneBook/ContactList';
import Filter from './components/PhoneBook/Filter';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    changeHandler = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value });
    };

    addContact = newContact => {
        const newName = newContact.name;
        const names = this.state.contacts.map(contact =>
            contact.name.toLowerCase(),
        );

        if (names.includes(newName.toLowerCase().trim())) {
            alert(`${newName} is already in contacts`);
        } else {
            this.setState(state => ({
                contacts: [...state.contacts, newContact],
            }));
        }
    };

    deleteContact = id => {
        const { contacts } = this.state;
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: updatedContacts });
    };

    filterContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        const { contacts } = this.state;
        return (
            <>
                <ContactForm onAddContact={this.addContact} />

                {contacts.length > 1 && (
                    <Filter onChange={this.changeHandler} />
                )}

                <ContactList
                    contacts={this.filterContacts()}
                    onDelete={this.deleteContact}
                />
            </>
        );
    }
}

export default App;
