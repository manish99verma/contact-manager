// Creates new id and insert it to newContact
export const insertContactId = (contactsList, newContact) => {
  if (!contactsList) {
    return { ...newContact, id: 1 };
  }

  let maxId = 0;
  for (let i = 0; i < contactsList.length; i++) {
    maxId = Math.max(contactsList[i].id, maxId);
  }

  return { ...newContact, id: maxId + 1 };
};
