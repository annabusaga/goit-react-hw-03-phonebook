import React from 'react';
import css from './Filter.module.css';
import { PropTypes } from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <>
      <label className={css.filter} htmlFor="">
        Find contacts by name{' '}
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
