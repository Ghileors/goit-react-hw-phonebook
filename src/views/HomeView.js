import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 24,
    color: '#e84a5f',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome to the Phone Book{' '}
      <span role="img" aria-label="Иконка мобильного телефона">
        📱
      </span>
    </h1>
    <p style={styles.subtitle}>
      To view and edit the list of contacts, register, or enter your profile.
    </p>
  </div>
);

export default HomeView;
