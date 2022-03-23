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

  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form'>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' defaultValue={name} />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input type='email' name='email' defaultValue={email} />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' rows='5' defaultValue={message} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

// Export component
export default ContactForm;
