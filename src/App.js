//import { connect } from 'react-redux';
import Title from './components/Title';
import Form from './components/Form';
import ContactsList from './components/Contacts';
import Filter from './components/Filter';
import './App.css';

  const App = () => {
    return (
      <>
        <section className="phonebook">
          <Title title="Phonebook" />
          <Form />
        </section>
        <section className="contacts">
          <Title title="Contacts" />
          <Filter />
          <ContactsList />
        </section>
      </>
    );
  }


export default App;