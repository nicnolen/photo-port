// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react'; // Import functions from the React Testing Library
import '@testing-library/jest-dom/extend-expect'; // import the extend expect library from the jest-dom package
import About from '..';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('About component', () => {
  // render About test
})