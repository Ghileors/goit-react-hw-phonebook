import React from 'react';
// import PropTypes from 'prop-types';

import Button from '../Button/Button';

import style from './ContactItem.module.scss';

export default function ContactItem({ contact, onRemoveContact }) {
    return (
        <li className={style.ContactItem}>
            {contact.name}: {contact.number}
            <Button id={contact.id} onRemove={onRemoveContact}></Button>
        </li>
    );
}
