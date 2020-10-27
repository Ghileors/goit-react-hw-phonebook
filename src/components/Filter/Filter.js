import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import * as contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import AppearStyles from './AppearStyles.module.scss';

const Filter = ({ contacts, value, onChangeFilter }) =>
    contacts.length > 1 && (
        <label className="label">
            <CSSTransition timeout={200} classNames={AppearStyles}>
                <input
                    className="filterInput"
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
