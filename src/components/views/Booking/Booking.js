import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>
        Booking view: {match.params.id}
      </h2>
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;