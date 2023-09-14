import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            className={css.input}
            placeholder="Name*"
            required
          ></input>
        </label>
        <label className={css.label}>
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            className={css.input}
            placeholder="Number*"
            required
          ></input>
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
