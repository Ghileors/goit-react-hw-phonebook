import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

const App = () => (
    <>
        <Section title="Phonebook">
            <ContactForm />
        </Section>
        <hr />

        <Section title="Contacts">
            <Filter />
            <ContactList />
        </Section>
        <hr />
    </>
);
export default App;
