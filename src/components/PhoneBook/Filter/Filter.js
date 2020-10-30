import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { contactsSelectors, contactsActions } from '../../../redux/contacts';

import style from './Filter.module.scss';
import AppearStyles from './AppearStyles.module.scss';

const Filter = ({ contacts, value, onChangeFilter }) =>
  contacts.length > 1 && (
    <label className="label">
      Find contacts
      <CSSTransition timeout={200} classNames={AppearStyles}>
        <input
          className={style.Filter}
          type="text"
          name="filter"
          value={value}
          placeholder="Search contact..."
          onChange={event => onChangeFilter(event.target.value)}
        />
      </CSSTransition>
    </label>
  );

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
