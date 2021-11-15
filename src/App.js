
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
    if (this.checkContactName(data.name)) {
      alert(`${data.name} is already in contacts.`)
      return
}
    const contact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    }
    this.setState(({contacts} )=> ({
      contacts: [contact, ...contacts],
    }))
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
  checkContactName = name => {
    return this.state.contacts.find((el) => el.name === name);
  }
  getFiltredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase()
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  }
 
  render() {

    // const filtredContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    
    const filtredContacts = this.getFiltredContacts();
    
    return (
      <div className="App">
        <div className="App-header">
          <h1>Phonebook</h1>
          <Form onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <ContactList
            contacts={filtredContacts}
            onDeleteContact={this.deleteContact} />
          <Filter
            value={this.filter}
            onChange={this.changeFilter} />
        </div>
      </div>
    )
  }
}

export default App;
