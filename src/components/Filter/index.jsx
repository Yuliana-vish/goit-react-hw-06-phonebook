import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import phonebookActions from '../../redux/phonebook/phonebook-actions';


const Filter = () => {
    const dispatch = useDispatch();
    const handleChangeFilter = event =>
      dispatch(phonebookActions.filterContacts(event.target.value));

    return (
      <label className={styles.label}>
       Find contacts by name
        <input
          className={styles.input}
          onChange={handleChangeFilter}         
        />
      </label>
    );
};

export default Filter;