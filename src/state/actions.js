import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./actionsTypes";

export const addContact = (task) => {
  return {
    type: ADD_CONTACT,
    payload: task,
  };
};

export const updateContact = (value) => {
  return {
    type: UPDATE_CONTACT,
    payload: value,
  };
};

export const deleteContact = (value) => {
  return {
    type: DELETE_CONTACT,
    payload: value,
  };
};
