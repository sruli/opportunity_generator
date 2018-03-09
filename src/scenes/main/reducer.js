import { combineReducers } from 'redux';
import { SCENE_NAME, NEXT_OPPORTUNITY_FETCHED } from './constants';

export const getSuggestedOpportunity = (state) => (
  state[SCENE_NAME].suggestedOpportunity
);

const suggestedOpportunityReducer = (state = '', action) => {
  switch (action.type) {
    case NEXT_OPPORTUNITY_FETCHED:
      return action.payload.nextOpportunity;
    default:
      return state;
  }
};

const savedOpportunitiesReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  suggestedOpportunity: suggestedOpportunityReducer,
  savedOpportunities: savedOpportunitiesReducer,
});
