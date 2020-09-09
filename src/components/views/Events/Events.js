import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = ({ match }) => (
  <div className={styles.component}>
    <h2>
      Events view: {match.params.id}
    </h2>
  </div>
);

Events.propTypes = {
  match: PropTypes.object,
};

export default Events;