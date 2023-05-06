import React from 'react';
import css from './ContactList.module.css';
import { PropTypes } from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList({ contacts, onDeleteTodo, children }) {
  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
