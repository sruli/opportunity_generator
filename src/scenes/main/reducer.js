import { combineReducers } from 'redux';
import { SCENE_NAME, NEXT_OPPORTUNITY_FETCHED, CHECK_ICON_CLICKED } from './constants';

export const getSuggestedOpportunity = state => (
  state[SCENE_NAME].suggestedOpportunity
);

export const getSavedOpportunities = state => (
  state[SCENE_NAME].savedOpportunities
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
    case CHECK_ICON_CLICKED:
      return [action.payload.suggestedOpportunity, ...state];
    default:
      return state;
  }
};

export default combineReducers({
  suggestedOpportunity: suggestedOpportunityReducer,
  savedOpportunities: savedOpportunitiesReducer,
});
