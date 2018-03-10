import React from 'react';
import PropTypes from 'prop-types';
import TrashCanIcon from '../../../components/TrashCanIcon';
import './SavedOpportunitiesItem.css';

const SavedOpportunitiesItem = ({ opportunity }) => (
  <div id="opportunity">
    <p>{opportunity}</p>
    <TrashCanIcon />
  </div>
);

SavedOpportunitiesItem.propTypes = {
  opportunity: PropTypes.string.isRequired,
};

export default SavedOpportunitiesItem;
