import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDebounce } from "use-debounce";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());
  const [debounceFilter] = useDebounce(filter.toLowerCase(), 1000);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(debounceFilter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
}
