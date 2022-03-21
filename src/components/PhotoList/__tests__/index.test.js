// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '../';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('PhotoList is rendering', () => {
  // baseline test
  it('renders', () => {
    render(<PhotoList />);
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
