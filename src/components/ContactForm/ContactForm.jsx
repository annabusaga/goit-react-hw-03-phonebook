import React, { Component } from 'react';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlerSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div className={css.container}>
        <form className={css.form} onSubmit={this.handlerSubmit}>
          <label className={css.name} htmlFor="">
            Name
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handlerInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={css.number} htmlFor="">
            Number
            <input
              placeholder="Enter your number"
              type="tel"
              value={this.state.number}
              onChange={this.handlerInput}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.button} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
