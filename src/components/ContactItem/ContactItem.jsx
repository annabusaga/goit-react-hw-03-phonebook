import React from 'react';
import css from './ContactItem.module.css';
import { PropTypes } from 'prop-types';

export default function ContactItem({ name, number, id, onDeleteTodo }) {
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button className={css.btn} onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
