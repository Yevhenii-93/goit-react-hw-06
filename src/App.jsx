import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm />

      <SearchBar />

      <ContactList />
    </>
  );
}

export default App;
