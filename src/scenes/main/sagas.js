import { takeEvery, put } from 'redux-saga/effects';
import { APP_READY } from '../../constants';
import { nextOpportunityFetched } from './actions';
import fetchNextOpportunity from '../../services/opportunityFetcher';

const onFetchNextOpportunity = function* onFetchNextOpportunity() {
  const nextOpportunity = yield fetchNextOpportunity();
  yield put(nextOpportunityFetched(nextOpportunity));
};

const mainSaga = function* mainSaga() {
  yield takeEvery(APP_READY, onFetchNextOpportunity);
};

export default mainSaga;
