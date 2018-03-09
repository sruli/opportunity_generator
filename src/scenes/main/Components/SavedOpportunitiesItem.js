import React from 'react';
import PropTypes from 'prop-types';
import './SavedOpportunitiesItem.css';

const SavedOpportunitiesItem = ({ opportunity }) => (
  <div id="opportunity">
    <p>{opportunity}</p>
  </div>
);

SavedOpportunitiesItem.propTypes = {
  opportunity: PropTypes.string.isRequired,
};

export default SavedOpportunitiesItem;
