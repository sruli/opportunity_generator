import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CheckIcon from '../../../components/CheckIcon';
import XIcon from '../../../components/XIcon';
import { xIconClicked, checkIconClicked } from '../actions';
import './Actions.css';

const Actions = ({ onXIconClicked, onCheckIconClicked, suggestedOpportunity }) => (
  <div id="actionsContainer">
    <XIcon onIconClicked={onXIconClicked} />
    <CheckIcon onIconClicked={() => { onCheckIconClicked(suggestedOpportunity); }} />
  </div>
);

Actions.propTypes = {
  onXIconClicked: PropTypes.func.isRequired,
  onCheckIconClicked: PropTypes.func.isRequired,
  suggestedOpportunity: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onXIconClicked: () => dispatch(xIconClicked()),
  onCheckIconClicked: (suggestedOpportunity) => {
    dispatch(checkIconClicked(suggestedOpportunity));
  },
});

export default connect(null, mapDispatchToProps)(Actions);
