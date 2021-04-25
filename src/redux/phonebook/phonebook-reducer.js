import { combineReducers } from 'redux';
import types from './phonebook-types';
import initialContacts from '../../components/Contacts/initialContacts.json';

const itemsReducer = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});