import React, { Component } from 'react';
import { connect } from 'react-redux';

import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Section from '../Section';
import Filter from '../Filter';

class ContactsView extends Component {
    componentDidMount() {
        this.props.onFetchContacts();
    }

    render() {
        return (
            <>
                <Section title="Phonebook">
                    <ContactForm />
                </Section>

                <Section title="Contacts">
                    <Filter />
                    {this.props.isLoadingContact && (
                        <h1 className="loading-state">Loading...</h1>
                    )}
                    <ContactList />
                </Section>
            </>
        );
    }
}
const mapStateToProps = state => ({
    isLoadingContact: contactsSelectors.getLoading(state),
});
const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
