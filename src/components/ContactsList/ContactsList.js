import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import css from './ContactsList.module.css';

function filterResults(contacts, filterString) {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterString.toLowerCase())
  );
}

export default class ContactsList extends Component {
  render() {
    return (
      <ul className={css.list}>
        {filterResults(this.props.contacts, this.props.filterString).map(
          (contact, index) => {
            return (
              <Contact
                name={contact.name}
                number={contact.number}
                onButtonClick={() => {
                  this.props.onDeleteElement(contact.name);
                }}
                key={index}
              ></Contact>
            );
          }
        )}
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.any).isRequired,
  filterString: PropTypes.string.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
};