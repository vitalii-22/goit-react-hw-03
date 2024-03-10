import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const handleSearchChange = evt => {
    setContacts(
      contacts.filter(
        contact => contact.name.toLowerCase() === evt.target.value.toLowerCase()
        // console.log(
        //   contact.name.toLowerCase() === evt.target.value.toLowerCase()
        // )
      )
    );
    console.log(evt.target.value.toLowerCase());
  };

  // contact.name.toLowerCase === evt.target.value.toLowerCase

  return (
    <div>
      <h1 className="title">Phonebook</h1>

      <SearchBox handleSearchChange={handleSearchChange} contacts={contacts} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
