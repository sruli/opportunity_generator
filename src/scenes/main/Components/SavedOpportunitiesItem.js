import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrashCanIcon from '../../../components/TrashCanIcon';
import { trashCanClicked } from '../actions';
import './SavedOpportunitiesItem.css';

const SavedOpportunitiesItem = ({ opportunity: { uuid, content }, onTrashCanClicked }) => (
  <div id="opportunity">
    <p>{content}</p>
    <TrashCanIcon onIconClicked={() => { onTrashCanClicked(uuid); }} />
  </div>
);

SavedOpportunitiesItem.propTypes = {
  opportunity: PropTypes.shape({
    uuid: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onTrashCanClicked: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onTrashCanClicked: (uuid) => {
    dispatch(trashCanClicked(uuid));
  },
});

export default connect(null, mapDispatchToProps)(SavedOpportunitiesItem);
