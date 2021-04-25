//import { Component } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAddContact } from '../../redux/phonebook/phonebook-actions';
// import { v4 as uuidv4 } from 'uuid';
//import PropTypes from 'prop-types';
import FormButton from './FormButton';
import FormName from './FormName';
import FormNumber from './FormNumber';
import styles from './Form.module.css';


const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
// class Form extends Component {
//     static propTypes = {
//        onAddContact: PropTypes.func.isRequired,
//     };

//     state = {
//         name: '',
//         number: '',
//     };


  const handleSubmit = event => {
    event.preventDefault();
    dispatch(onAddContact(name, number));
    setName('');
    setNumber('');
  };

  const handleChangeName = event => setName(event.target.value);
  const handleChangeNumber = event => setName(event.target.value);

    return (
          <form className={styles.form} onSubmit={handleSubmit}>
            <FormName handleChange={handleChangeName} name={name} />
            <FormNumber handleChange={handleChangeNumber} number={number} />
            <FormButton />
          </form>
        );
    }


export default Form;