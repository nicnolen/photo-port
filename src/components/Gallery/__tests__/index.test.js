// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

// Mock props
const portrait = {
  name: 'portraits',
  description: 'Portraits of people in my life',
};

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('Gallery is rendering', () => {
  // baseline test
  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
