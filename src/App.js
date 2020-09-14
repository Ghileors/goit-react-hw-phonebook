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

    componentDidMount() {
        const storedContacts = JSON.parse(localStorage.getItem('contacts'));

        if (storedContacts) {
            this.setState({ contacts: storedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;

        if (prevContacts !== nextContacts) {
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
        }
    }

    changeHandler = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value });
    };

    addContact = NewContact => {
        const newName = NewContact.name;
        const names = this.state.contacts.map(contact =>
            contact.name.toLowerCase(),
        );
        if (names.includes(newName.toLowerCase().trim())) {
            alert(`${newName} is already in contacts`);
        } else {
            this.setState(state => ({
                contacts: [...state.contacts, NewContact],
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
        if (contacts.length) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()),
            );
        }
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
