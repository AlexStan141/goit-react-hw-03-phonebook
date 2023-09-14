import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { BiUserPin } from 'react-icons/bi';
import { BiSolidTrash } from 'react-icons/bi';

export default class Contact extends Component {
  render() {
    return (
      <div className={css.container}>
        <BiUserPin
          style={{ color: 'orange', width: '50px', height: '50px' }}
        ></BiUserPin>
        <div className={css.info}>
          <span className={css.data}>{this.props.name}</span>
          <span className={css.data}>{this.props.number}</span>
        </div>
        <BiSolidTrash
          onClick={this.props.onButtonClick}
          style={{ color: 'orange', marginRight: '15px' }}
        >
          Delete
        </BiSolidTrash>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
