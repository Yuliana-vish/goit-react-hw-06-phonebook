  
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { initialContacts } from '../../components/Contacts/initialContacts.js';
import actions from './phonebook-actions';



const contactsReducer = createReducer(initialContacts, {
  [actions.onAddContact]: (state, { payload }) => [...state, payload],
  [actions.onDeleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});


// Redux
// import { combineReducers } from 'redux';
// import types from './phonebook-types';
// import initialContacts from '../../components/Contacts/initialContacts.json';

// const itemsReducer = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});