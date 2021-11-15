
import './App.css';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    // contacts: [
    //      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ],
    contacts: [],
    filter: '',
    }

  addContact = data => {
    // console.log(data);
    // const idN = nanoid();

    const contact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    }
    // console.log(contact);
    this.setState(({contacts} )=> ({
      contacts: [contact, ...contacts],
    }))
    console.log(this.state);
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
    // console.log(this.state);
  }
  

  render() {

    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    
    
    return (
      <div className="App">
        <div className="App-header">
          <h1>Phonebook</h1>
          <Form onSubmit={this.addContact} />
          <div>
            <h2>Contacts</h2>
            <ContactList contacts={filtredContacts} onDeleteContact={ this.deleteContact}/>
          </div>
          <Filter value={this.filter} onChange={ this.changeFilter}/>

        </div>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
