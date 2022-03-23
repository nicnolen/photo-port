// Import dependencies
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// Make component function
function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = e => {
    // validate email
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Invalid email format!');
      } else {
        setErrorMessage('');
      }
    } else {
      // error message for message and name form elements
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
        console.info(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if there are  no error messages
    if (!errorMessage) {
      // update the formState value for the name property
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.info('Form', formState);
    }
  };

  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            name='email'
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            defaultValue={message}
            onBlur={handleChange}
          />
          {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

// Export component
export default ContactForm;
