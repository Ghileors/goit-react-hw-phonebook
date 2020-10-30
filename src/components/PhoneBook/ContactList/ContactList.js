import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import { contactsSelectors } from '../../../redux/contacts';

import ContactItem from '../ContactItem/ContactItem';

import AppearStyles from './AppearStyles.module.scss';
import style from './ContactList.module.scss';

const ContactList = ({ contacts }) => {
  return (
    <div className={style.ContactListWrp}>
      <TransitionGroup component="ul" className={style.ContactList}>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <CSSTransition
              timeout={200}
              key={contact.id}
              classNames={AppearStyles}
            >
              <ContactItem key={contact.id} id={contact.id} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
