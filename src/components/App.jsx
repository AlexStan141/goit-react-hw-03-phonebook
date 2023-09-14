import React, { Component } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import SearchFilter from './SearchFilter/SearchFilter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: INITIAL_CONTACTS,
      filter: '',
    };
  }

  checkNameExistance(name) {
    for (let contact of this.state.contacts) {
      if (contact.name === name) {
        return true;
      }
    }
    return false;
  }

  deleteElement(name) {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(contact => contact.name !== name),
      };
    });
  }

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <Form
          onSubmit={values => {
            if (!this.checkNameExistance(values.name)) {
              var newContact = {
                id: nanoid(),
                name: values.name,
                number: values.number,
              };
              this.setState(prevState => {
                return {
                  ...prevState,
                  contacts: [...prevState.contacts, newContact],
                };
              });
            } else {
              alert(`${values.name} is already in contacts`);
            }
          }}
        ></Form>
        <h2 className={css.subtitle}>Contacts</h2>
        <SearchFilter
          onStringChange={e => {
            this.setState({ filter: e.target.value });
          }}
        ></SearchFilter>
        <ContactsList
          contacts={this.state.contacts}
          filterString={this.state.filter}
          onDeleteElement={name => {
            this.deleteElement(name);
          }}
        ></ContactsList>
      </div>
    );
  }
}
