// Import dependencies
import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Create the `Gallery` function
const Gallery = (props) => {
  const currentCategory = {
    name: 'commercial',
    description:
      'Photos of grocery stores, food trucks, and other commercial projects',
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
    </section>
  );
};

// Export the module
export default Gallery;
