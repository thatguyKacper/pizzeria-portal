import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  const state = {
    id: 'abc',
  };

  return (
    <div className={styles.component}>
      <h2>
        Tables view
      </h2>
      <Link to={`/tables/booking/new`} className={styles.link}>New booking</Link>
      <Link to={`/tables/booking/${state.id}`} className={styles.link}>Booking number</Link>
      <Link to={`/tables/event/new`} className={styles.link}>New event</Link>
      <Link to={`/tables/event/${state.id}`} className={styles.link}>Event number</Link>
    </div>
  );
};

Tables.propTypes = {
  children: PropTypes.node,
};

export default Tables;