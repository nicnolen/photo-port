// Import dependencies
import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Create the `Nav` function
const Nav = () => {
  const [categories] = useState([
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
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const categorySelected = name => {
    console.info(`${name} selected`);
    return name;
  };

  return (
    <header className='flex-row px-1'>
      <h2>
        <a data-testid='link' href='/'>
          <span role='img' aria-label='camera'>
            {' '}
            📸
          </span>{' '}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a
              data-testid='about'
              href='#about'
              onClick={() => categorySelected('About Me')}>
              About Me
            </a>
          </li>
          <li className={'mx-2'}>
            <span onClick={() => categorySelected('Contact')}>Contact</span>
          </li>
          {categories.map(category => (
            // whenever you map over anything in JSX the outmost element must have a key attribute set to something unique
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
              }`}
              key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  categorySelected(category.name);
                }}>
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
