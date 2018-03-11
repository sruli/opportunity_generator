import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from './Actions';
import { getSuggestedOpportunity } from '../reducer';
import './Generator.css';

const Generator = ({ suggestedOpportunity }) => (
  <div>
    <h1 id="suggestedOpportunity">{suggestedOpportunity.content}</h1>
    <Actions {...{ suggestedOpportunity }} />
  </div>
);

Generator.propTypes = {
  suggestedOpportunity: PropTypes.shape({
    uuid: PropTypes.string,
    content: PropTypes.string,
  }),
};

Generator.defaultProps = {
  suggestedOpportunity: {},
};

const mapStateToProps = state => ({
  suggestedOpportunity: getSuggestedOpportunity(state),
});

export default connect(mapStateToProps)(Generator);
