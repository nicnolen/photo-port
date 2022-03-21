// Import React
import React from 'react';

// Create the `Nav` component
const Nav = () => {
  return <header>
    <h2>
      <a href='/'>
        <span role="img" aria-label="camera">📸</span> Oh Snap!
      </a>
    </h2>
    <nav>
      <ul className="flex-row">
        <li className='mx-2'>
          <a href='#about'>
            About me
          </a>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  </header>;
};

// Export the module
export default Nav;
