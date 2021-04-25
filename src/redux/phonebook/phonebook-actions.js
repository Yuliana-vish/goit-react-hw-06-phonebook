import types from "./phonebook-types";
import { v4 as uuidv4 } from 'uuid';

export const onAddContact = (name, number) =>({
  type: types.ADD_CONTACT,
  payload: {id: uuidv4(), name, number}
})

export const onFilterContact = (value) => ({
  type: types.FILTER_CONTACT,
  payload: {value}
});

export const onDeleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: {id}
});



