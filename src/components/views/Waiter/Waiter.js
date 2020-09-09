import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>
      Waiter view
    </h2>
  </div>
);

Waiter.propTypes = {
  children: PropTypes.node,
};

export default Waiter;