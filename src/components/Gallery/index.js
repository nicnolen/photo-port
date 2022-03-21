// Import dependencies
import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

// Create the `Gallery` function
const Gallery = props => {
  const currentCategory = {
    name: 'commercial',
    description:
      'Photos of grocery stores, food trucks, and other commercial projects',
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <figure className='flex-row'>
        <img
          src={photo}
          alt='Commercial Example'
          className='img-thumbnail mx-1'
        />
      </figure>
    </section>
  );
};

// Export the module
export default Gallery;
