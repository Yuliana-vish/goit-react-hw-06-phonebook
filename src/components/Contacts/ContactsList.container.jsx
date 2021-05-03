import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import ContactsList from './ContactsList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.onDeleteContact(id)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
