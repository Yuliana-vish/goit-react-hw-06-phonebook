import { useDispatch } from 'react-redux';
import { onFilterContact } from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';


const Filter = () => {
    const dispatch = useDispatch();
    const handleChangeFilter = event =>
      dispatch(onFilterContact(event.target.value));

    return (
      <label className={styles.label}>
        {/* {' '} */}
        Find contacts by name
        <input
          className={styles.input}
          onChange={handleChangeFilter}
         
        />
      </label>
    );
};

export default Filter;