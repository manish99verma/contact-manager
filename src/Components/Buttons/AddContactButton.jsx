import { MdAddIcCall } from "react-icons/md";
import { useState } from "react";
import AddContactDialog from "../Dialogs/AddContactDialog";

const AddContactButton = () => {
  const [isAddContactDialogOpened, setIsAddContactDialogOpened] =
    useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsAddContactDialogOpened((b) => !b);
        }}
        aria-label="Add Contact"
        title="Add Contact"
        className="fixed bottom-3 right-3 p-3 bg-blue-600 rounded-full text-white shadow-xl 
             flex gap-2 items-center
             cursor-pointer hover:opacity-60 active:opacity-20 transition-all duration-200"
        type="button"
      >
        <MdAddIcCall className="w-6 h-6" />
        <span className="hidden lg:block">Add Contact</span>
      </button>
      {isAddContactDialogOpened && (
        <AddContactDialog
          onDismiss={() => setIsAddContactDialogOpened(false)}
        />
      )}
    </>
  );
};

export default AddContactButton;
