import { useDispatch } from "react-redux";
import { deleteContact } from "../../state/actions";
import Button from "../Buttons/Button";
import BaseDialog from "./BaseDialog";

const DeleteContactDialog = ({ contact, onDismiss }) => {
  const dispatch = useDispatch();

  const handlePermissionGranted = () => {
    dispatch(deleteContact(contact.id));
    onDismiss();
  };

  return (
    <BaseDialog onDismiss={onDismiss}>
      <h2 className="text-xl font-medium pb-3">Delete Contact</h2>
      <p className="text-sm text-gray-700">
        Do you really want to delete <strong>{contact.name}</strong>{" "}
        permanently?
      </p>
      <div className="flex items-center justify-end gap-3 pt-8">
        <Button onClick={onDismiss} buttonStyle="primary">
          No
        </Button>
        <Button onClick={handlePermissionGranted} buttonStyle="error">
          Yes
        </Button>
      </div>
    </BaseDialog>
  );
};

export default DeleteContactDialog;
