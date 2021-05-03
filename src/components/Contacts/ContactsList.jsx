import styles from './Contacts.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            <p className={styles.contact}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
