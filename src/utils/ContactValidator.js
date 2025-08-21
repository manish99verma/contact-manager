const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 50;
const MIN_EMAIL_LENGTH = 5;
const MAX_EMAIL_LENGTH = 50;
const MIN_PHONE_LENGTH = 4;
const MAX_PHONE_LENGTH = 50;
const phoneRegex = /^[+\d\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactValidator = (contact) => {
  let errorMsg = "";

  // Empty Validator
  if (!contact) {
    errorMsg = "Please add a contact!";
  } else if (!contact.name) {
    errorMsg = "Please add contact name";
  } else if (!contact.email) {
    errorMsg = "Please add contact email address";
  } else if (!contact.phone) {
    errorMsg = "Please add contact phone no.";
  }

  // Length Validator
  else if (contact.name.length < MIN_NAME_LENGTH) {
    errorMsg = "Please enter a larger name!";
  } else if (contact.name.length > MAX_NAME_LENGTH) {
    errorMsg = "Please enter a smaller name!";
  } else if (contact.email.length < MIN_EMAIL_LENGTH) {
    errorMsg = "Please enter a larger email";
  } else if (contact.email.length > MAX_EMAIL_LENGTH) {
    errorMsg = "Please enter a smaller email";
  } else if (contact.phone.length < MIN_PHONE_LENGTH) {
    errorMsg = "Please enter a larger phone number";
  } else if (contact.phone.length > MAX_PHONE_LENGTH) {
    errorMsg = "Please enter a smaller phone number";
  } else if (!phoneRegex.test(contact.phone)) {
    errorMsg = "Invalid phone no.";
  } else if (!emailRegex.test(contact.email)) {
    errorMsg = "Invalid email";
  }

  return errorMsg;
};

export default contactValidator;
