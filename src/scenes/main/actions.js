import { NEXT_OPPORTUNITY_FETCHED } from './constants';

export const nextOpportunityFetched = (nextOpportunity) => ({
  type: NEXT_OPPORTUNITY_FETCHED,
  payload: { nextOpportunity },
});
