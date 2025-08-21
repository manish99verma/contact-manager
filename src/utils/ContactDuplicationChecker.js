const CheckContactDuplication = (contacts, newContact) => {
  if (!contacts) return;

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].id === newContact.id) {
      continue;
    }

    if (contacts[i].phone === newContact.phone) {
      return `Phone no. ${newContact.phone} already exists!`;
    } else if (contacts[i].email === newContact.email) {
      return `Email ${newContact.phone} already exists!`;
    }
  }
};

export default CheckContactDuplication;
