import {
  NEXT_OPPORTUNITY_FETCHED,
  CHECK_ICON_CLICKED,
  X_ICON_CLICKED,
  TRASH_CAN_CLICKED,
  UI_FETCHED,
} from './constants';

export const nextOpportunityFetched = nextOpportunity => ({
  type: NEXT_OPPORTUNITY_FETCHED,
  payload: { nextOpportunity },
});

export const uiFetched = (nextOpportunity, allOpportunities) => ({
  type: UI_FETCHED,
  payload: { nextOpportunity, allOpportunities },
});

export const checkIconClicked = suggestedOpportunity => ({
  type: CHECK_ICON_CLICKED,
  payload: { suggestedOpportunity },
});

export const xIconClicked = () => ({
  type: X_ICON_CLICKED,
});

export const trashCanClicked = uuid => ({
  type: TRASH_CAN_CLICKED,
  payload: { uuid },
});
