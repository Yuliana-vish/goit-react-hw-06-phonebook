import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import styles from './Contacts.module.css';
import { connect } from 'react-redux';
import { onDeleteContact } from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';

const getFilterContacts = ({ items, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const Contacts = () => {
  const contacts = useSelector(getFilterContacts);
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          onDeleteContact={onDeleteContact}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};


const mapStateToProps = ({ contacts: { items, filter } }) => ({
  filterContacts: getFilterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(onDeleteContact(id)),
});

Contacts.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
