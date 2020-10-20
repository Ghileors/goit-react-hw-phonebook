import React from 'react';
import { CSSTransition } from 'react-transition-group';

import style from './Section.module.scss';
import AppearStyles from './AppearStyles.module.scss';

export default function Section({ title, children }) {
    return (
        <div className={style.Section}>
            <CSSTransition
                in={true}
                appear
                unmountOnExit
                classNames={AppearStyles}
                timeout={2000}
            >
                <h2 ref={React.createRef()}>{title}</h2>
            </CSSTransition>
            {children}
        </div>
    );
}
