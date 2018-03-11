import {
  NEXT_OPPORTUNITY_FETCHED,
  CHECK_ICON_CLICKED,
  X_ICON_CLICKED,
  TRASH_CAN_CLICKED,
} from './constants';

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

export const trashCanClicked = uuid => ({
  type: TRASH_CAN_CLICKED,
  payload: { uuid },
});
