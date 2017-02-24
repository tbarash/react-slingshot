import { combineReducers } from 'redux';
import slider from './sliderReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  slider,
  routing: routerReducer
});

export default rootReducer;
