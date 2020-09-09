import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

const Homepage = () => (
  <div className={styles.component}>
    <h2>
      Homepage view
    </h2>
  </div>
);

Homepage.propTypes = {
  children: PropTypes.node,
};

export default Homepage;