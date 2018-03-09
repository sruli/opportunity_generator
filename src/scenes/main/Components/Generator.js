import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from './Actions';
import { getSuggestedOpportunity } from '../reducer';

const Generator = ({ suggestedOpportunity }) => (
  <div>
    <h1>{suggestedOpportunity}</h1>
    <Actions />
  </div>
);

Generator.propTypes = {
  suggestedOpportunity: PropTypes.string,
};

Generator.defaultProps = {
  suggestedOpportunity: '',
};

const mapStateToProps = state => ({
  suggestedOpportunity: getSuggestedOpportunity(state),
});

export default connect(mapStateToProps)(Generator);
