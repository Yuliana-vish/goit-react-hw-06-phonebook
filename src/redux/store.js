import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './phonebook/phonebook-reducer';


const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;