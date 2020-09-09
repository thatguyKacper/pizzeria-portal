import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';

const NewOrder = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>
        NewOrder view: {match.params.id}
      </h2>
    </div>
  );
};

NewOrder.propTypes = {
  match: PropTypes.object,
};

export default NewOrder;