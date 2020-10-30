import React, { Component } from 'react';
import { connect } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

import ContactForm from '../components/PhoneBook/ContactForm';
import ContactList from '../components/PhoneBook/ContactList';
import Section from '../components/PhoneBook/Section';
import Filter from '../components/PhoneBook/Filter';

import style from '../styles/views.module.scss';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className={style.AppWrapper}>
        <div className={style.AppContainer}>
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
        </div>
      </div>
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
