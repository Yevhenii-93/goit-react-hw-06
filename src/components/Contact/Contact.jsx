import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import css from "./Contacts.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <div className={css.contacts}>
          <FaPhoneAlt />
          <p className={css.contactText}>{name}</p>
        </div>
        <div className={css.contacts}>
          <FaUserAlt />
          <p className={css.contactText}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
}
