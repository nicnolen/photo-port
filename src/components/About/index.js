// Import dependencies
import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

// Create the `About` function
const About = () => {
  return (
    <section className='my-5'>
      <h1 id='about'>Who am I?</h1>
      <img
        src={coverImage}
        className='my-2'
        style={{ width: '100%' }}
        alt='cover'
      />
    </section>
  );
};

// Export components
export default About;
