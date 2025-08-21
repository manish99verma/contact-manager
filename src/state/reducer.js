import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./actionsTypes";
import { insertContactId } from "../utils/CreateNewId";
import sortContactsById from "../utils/SortContacts";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Dummy Contact 1",
      phone: "+91 9834223434",
      email: "dummy-email-1@gmail.com",
    },
    {
      id: 2,
      name: "Dummy Contact 2",
      phone: "+91 9837492274",
      email: "dummy-email-2@gmail.com",
    },
    {
      id: 3,
      name: "Manish Kumar",
      phone: "+91 7823435901",
      email: "dummy-email-3@gmail.com",
    },
    {
      id: 4,
      name: "Manish Kumar",
      phone: "+91 6734521095",
      email: "dummy-contact-4@gmail.com",
    },
  ],
};

// Sort contacts by new to old
sortContactsById(initialState.contacts);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          insertContactId(state.contacts, action.payload),
          ...state.contacts,
        ],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: sortContactsById([
          ...state.contacts.filter((curr) => curr.id !== action.payload.id),
          action.payload,
        ]),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((curr) => curr.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
