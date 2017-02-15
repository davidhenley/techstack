import { combineReducers } from 'redux';

import libraries from './libraries';
import selected from './selected';

export default combineReducers({
  libraries,
  selected
});
