import { combineReducers } from 'redux';
import { SCENE_NAME as main, reducer as mainReducer } from './scenes/main';

export default combineReducers({
  [main]: mainReducer,
});
