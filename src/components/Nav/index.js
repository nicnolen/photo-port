// Import dependencies
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Create the `Nav` function
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  const categorySelected = name => {
    console.info(`${name} selected`);
    return name;
  };

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

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
              onClick={() => {
                categorySelected('About Me');
                setContactSelected(false);
              }}>
              About Me
            </a>
          </li>
          <li className={'mx-2'}>
            <span
              onClick={() => {
                categorySelected('Contact');
                setContactSelected(true);
              }}>
              Contact
            </span>
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
                  setContactSelected(false);
                }}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// Export the module
export default Nav;
