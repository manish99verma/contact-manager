const sortContactsById = (contacts) => {
  contacts.sort((a, b) => b.id - a.id);
  return contacts;
};

export default sortContactsById;
