import React from 'react';

import style from './Notification.module.scss';

const Notification = () => (
  <div className={style.Wrp}>
    <div className={style.Popup}>
      <h3 className={style.NotificationTitle}>Attention!</h3>
      <p className={style.NotificationText}>This contact exist in list!</p>
    </div>
  </div>
);

export default Notification;
