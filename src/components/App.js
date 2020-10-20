import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section';
import Filter from './Filter/Filter';

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
        storedContacts && this.setState({ contacts: storedContacts });
    }

    componentDidUpdate(prevProps, prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;
        prevContacts !== nextContacts &&
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    addContact = contact => {
        const newName = contact.name;
        const newNumber = contact.number;
        this.setState(prevState => {
            const existedContacts = prevState.contacts.map(
                contact => contact.name,
            );
            return {
                contacts:
                    existedContacts.includes(newName) ||
                    newName === '' ||
                    newNumber === ''
                        ? prevState.contacts
                        : [...prevState.contacts, contact],
            };
        });
    };

    deleteContact = event => {
        this.setState({
            contacts: this.state.contacts.filter(
                contact => contact.id !== event.target.id,
            ),
        });
    };

    filterContacts = event => {
        const { name, value } = event;
        this.setState({
            [name]: value,
        });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;

        return (
            contacts.length &&
            contacts.filter(
                contact =>
                    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                    contact.number.includes(filter),
            )
        );
    };

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (
            <div>
                <Section title="Phonebook">
                    <ContactForm
                        onSubmit={this.addContact}
                        appState={this.state}
                    />
                </Section>
                <hr />

                <Section title="Contacts">
                    {this.state.contacts.length > 1 && (
                        <Filter
                            onChangeFilter={this.filterContacts}
                            value={filter}
                        />
                    )}
                    {visibleContacts.length > 0 ? (
                        <ContactList
                            contacts={visibleContacts}
                            onRemoveContact={this.deleteContact}
                        />
                    ) : (
                        <p className="text">The phone book is empty.</p>
                    )}
                </Section>
                <hr />
            </div>
        );
    }
}

export default App;
