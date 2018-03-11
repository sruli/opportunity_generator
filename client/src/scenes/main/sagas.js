import { takeEvery, put } from 'redux-saga/effects';
import { APP_READY } from '../../constants';
import { X_ICON_CLICKED, CHECK_ICON_CLICKED } from '../../scenes/main/constants';
import { nextOpportunityFetched, uiFetched } from './actions';
import fetchNextOpportunity from '../../services/opportunityFetcher';
import { getAllOpportunities, createOpportunity } from '../../services/api';

const onAppReady = function* onAppReady() {
  const nextOpportunity = yield fetchNextOpportunity();
  const allOpportunities = yield getAllOpportunities();
  yield put(uiFetched(nextOpportunity, allOpportunities));
};

const onFetchNextOpportunity = function* onFetchNextOpportunity() {
  const nextOpportunity = yield fetchNextOpportunity();
  yield put(nextOpportunityFetched(nextOpportunity));
};

const onCheckIconClicked = function* onCheckIconClicked({ payload: { suggestedOpportunity } }) {
  yield createOpportunity(suggestedOpportunity);
  const nextOpportunity = yield fetchNextOpportunity();
  yield put(nextOpportunityFetched(nextOpportunity));
};

const mainSaga = function* mainSaga() {
  yield takeEvery(APP_READY, onAppReady);
  yield takeEvery(X_ICON_CLICKED, onFetchNextOpportunity);
  yield takeEvery(CHECK_ICON_CLICKED, onCheckIconClicked);
};

export default mainSaga;
