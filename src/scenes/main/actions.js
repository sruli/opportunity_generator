import { NEXT_OPPORTUNITY_FETCHED, CHECK_ICON_CLICKED, X_ICON_CLICKED } from './constants';

export const nextOpportunityFetched = nextOpportunity => ({
  type: NEXT_OPPORTUNITY_FETCHED,
  payload: { nextOpportunity },
});

export const checkIconClicked = suggestedOpportunity => ({
  type: CHECK_ICON_CLICKED,
  payload: { suggestedOpportunity },
});

export const xIconClicked = () => ({
  type: X_ICON_CLICKED,
});
