import PropTypes from 'prop-types';
//import { useDispatch, useSelector } from 'react-redux';
import styles from './Contacts.module.css';
//import { onDeleteContact } from '../../redux/phonebook/phonebook-actions';


// const getContacts = id => state =>
//   state.contacts.items.find(contact => contact.id === id);

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  
  return (
    <li className={styles.item} key={id}>
      <p className={styles.contact}>
        {' '}
        - {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={styles.btn}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactItem;
