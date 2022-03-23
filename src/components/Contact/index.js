// Import dependencies
import React, { useState } from 'react';

// Make component function
function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  const handleChange = e => {
    // update the formState value for the name property
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form'>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            name='email'
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

// Export component
export default ContactForm;
