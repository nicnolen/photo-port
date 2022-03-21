// Import dependencies
import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Create the `Nav` function
const Nav = () => {
  const categories = [
    {
      name: 'commercial',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ];

  const categorySelected = name => {
    console.info(`${name} selected`);
  };

  return (
    <header className='flex-row px-1'>
      <h2>
        <a data-testid='link' href='/'>
          <span role='img' aria-label='camera'>
            📸
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a
              data-testid='about'
              href='#about'
              onClick={() => console.info('About Me selected')}>
              About Me
            </a>
          </li>
          <li className={'mx-2'}>
            <span onClick={() => console.info('Contact selected')}>
              Contact
            </span>
          </li>
          {categories.map(category => (
            // whenever you map over anything in JSX the outmost element must have a key attribute set to something unique
            <li className='mx-1' key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Export the module
export default Nav;
