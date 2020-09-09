import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import { Link } from 'react-router-dom';

const Order = ({ id }) => {
  const state = {
    id: 'abc',
  };

  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <Link to={`/order/new`} className={styles.link}>New order</Link>
      <Link to={`/order/:${state.id}`} className={styles.link}>Order number</Link>
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.string,
};

export default Order;