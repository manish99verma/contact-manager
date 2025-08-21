import { useSelector } from "react-redux";
import Button from "./Buttons/Button";
import ContactCell from "./ContactCell";
import { useState } from "react";
import DeleteContactDialog from "./Dialogs/DeleteContactDialog";
import EditContactDialog from "./Dialogs/EditContactDialog";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts);
  const [selectedContactToDelete, setSelectedContactToDelete] = useState();
  const [selectedContactToEdit, setSelectedContactToEdit] = useState();

  return (
    <>
      <div className="w-full overflow-x-auto pt-2 pb-6">
        <table className="w-full text-center whitespace-nowrap">
          <thead>
            <tr className="bg-[#7fccff] text-lg font-medium">
              <ContactCell>Id</ContactCell>
              <ContactCell>Name</ContactCell>
              <ContactCell>Phone no.</ContactCell>
              <ContactCell>Email</ContactCell>
              <ContactCell>Action</ContactCell>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              contacts.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-[#e3e3e3]"
                  }`}
                >
                  <ContactCell>{item.id}</ContactCell>
                  <ContactCell>{item.name}</ContactCell>
                  <ContactCell>{item.phone}</ContactCell>
                  <ContactCell>{item.email}</ContactCell>
                  <ContactCell>
                    <Button
                      onClick={() => setSelectedContactToEdit(item)}
                      buttonStyle="primary"
                      actionName="Edit Contact"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => setSelectedContactToDelete(item)}
                      buttonStyle="error"
                      actionName="Delete Contact"
                    >
                      Delete
                    </Button>
                  </ContactCell>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {selectedContactToDelete && (
        <DeleteContactDialog
          onDismiss={() => setSelectedContactToDelete(null)}
          contact={selectedContactToDelete}
        />
      )}
      {selectedContactToEdit && (
        <EditContactDialog
          onDismiss={() => setSelectedContactToEdit(null)}
          contact={selectedContactToEdit}
        />
      )}
    </>
  );
};

export default ContactsList;
