import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SavedOpportunitiesItem from './SavedOpportunitiesItem';
import { getSavedOpportunities } from '../reducer';
import './SavedOpportunitiesList.css';

const SavedOpportunitiesList = ({ savedOpportunities }) => (
  <div id="savedOpportunitiesList">
    {
      savedOpportunities.map((opportunity, key) =>
        <SavedOpportunitiesItem {...{ opportunity, key }} />)
    }
  </div>
);

SavedOpportunitiesList.propTypes = {
  savedOpportunities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  savedOpportunities: getSavedOpportunities(state),
});

export default connect(mapStateToProps)(SavedOpportunitiesList);
