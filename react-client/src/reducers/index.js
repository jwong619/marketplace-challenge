import {combineReducers} from 'redux';
import ItemsReducer from './reducer-items';


const allReducers = combineReducers({
  items: ItemsReducer
});

export default allReducers;