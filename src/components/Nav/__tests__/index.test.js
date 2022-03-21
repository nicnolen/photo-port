// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });
  
  // snapshot test
})