import { useState } from "react";
import Button from "../Buttons/Button";
import LabeledInput from "../input/LabeledInput";
import BaseDialog from "./BaseDialog";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../state/actions";
import contactValidator from "../../utils/ContactValidator";
import CheckContactDuplication from "../../utils/ContactDuplicationChecker";

const EditContactDialog = ({ contact, onDismiss }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(contact);
  const [errorMsg, setErrorMsg] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Validate Input
    const validationMsg = contactValidator(formData);
    if (validationMsg) {
      setErrorMsg(validationMsg);
      return;
    }

    // Check Duplicates
    const duplicationError = CheckContactDuplication(contacts, formData);
    if (duplicationError) {
      setErrorMsg(duplicationError);
      return;
    }

    setErrorMsg("");
    dispatch(updateContact(formData));
    onDismiss();
  };

  return (
    <BaseDialog onDismiss={onDismiss}>
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col w-[70vw] sm:w-96 gap-6"
      >
        <h2 className="text-xl font-medium pb-3 text-center mb-2">
          Edit Contact
        </h2>
        <LabeledInput
          label="Name"
          inputId="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <LabeledInput
          label="Phone No."
          inputId="phone"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
        <LabeledInput
          label="Email"
          inputId="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <Button buttonStyle="primary" actionName="Save Contact" type="submit">
          Save
        </Button>
        {errorMsg && (
          <div className="-mt-5 text-sm text-center font-light text-red-600">
            {errorMsg}
          </div>
        )}
      </form>
    </BaseDialog>
  );
};

export default EditContactDialog;
