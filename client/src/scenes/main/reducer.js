import { combineReducers } from 'redux';
import {
  SCENE_NAME,
  NEXT_OPPORTUNITY_FETCHED,
  CHECK_ICON_CLICKED,
  TRASH_CAN_CLICKED,
  UI_FETCHED,
} from './constants';

export const getSuggestedOpportunity = state => (
  state[SCENE_NAME].suggestedOpportunity
);

export const getSavedOpportunities = state => (
  state[SCENE_NAME].savedOpportunities
);

const suggestedOpportunityReducer = (state = {}, action) => {
  switch (action.type) {
    case NEXT_OPPORTUNITY_FETCHED:
    case UI_FETCHED:
      return action.payload.nextOpportunity;
    default:
      return state;
  }
};

const savedOpportunitiesReducer = (state = [], action) => {
  switch (action.type) {
    case UI_FETCHED:
      return action.payload.allOpportunities || [];
    case CHECK_ICON_CLICKED:
      return [
        action.payload.suggestedOpportunity,
        ...state,
      ];
    case TRASH_CAN_CLICKED:
      return state.filter(opportunity => opportunity.uuid !== action.payload.uuid);
    default:
      return state;
  }
};

export default combineReducers({
  suggestedOpportunity: suggestedOpportunityReducer,
  savedOpportunities: savedOpportunitiesReducer,
});
