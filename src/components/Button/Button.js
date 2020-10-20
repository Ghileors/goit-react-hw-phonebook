import React from 'react';

import style from './Button.module.scss';

export default function Button({ id, onRemove }) {
    return (
        <button
            id={id}
            className={style.Button}
            type="submit"
            onClick={onRemove}
        ></button>
    );
}
