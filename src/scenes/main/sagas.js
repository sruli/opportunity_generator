import { takeEvery, put } from 'redux-saga/effects';
import { APP_READY } from '../../constants';
import { X_ICON_CLICKED, CHECK_ICON_CLICKED } from '../../scenes/main/constants';
import { nextOpportunityFetched } from './actions';
import fetchNextOpportunity from '../../services/opportunityFetcher';

const onFetchNextOpportunity = function* onFetchNextOpportunity() {
  const nextOpportunity = yield fetchNextOpportunity();
  yield put(nextOpportunityFetched(nextOpportunity));
};

const mainSaga = function* mainSaga() {
  yield takeEvery(APP_READY, onFetchNextOpportunity);
  yield takeEvery(X_ICON_CLICKED, onFetchNextOpportunity);
  yield takeEvery(CHECK_ICON_CLICKED, onFetchNextOpportunity);
};

export default mainSaga;
