import AddContactButton from "./Components/Buttons/AddContactButton";
import ContactsList from "./Components/ContactsList";

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-screen max-w-5xl px-[2%] justify-self-center">
        <h1 className="text-center py-4 text-2xl font-bold">Your contacts</h1>
        <ContactsList />
        <AddContactButton />
      </div>
    </div>
  );
}

export default App;
