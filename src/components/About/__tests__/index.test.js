// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react'; // Import functions from the React Testing Library
import '@testing-library/jest-dom/extend-expect'; // import the extend expect library from the jest-dom package
import About from '..';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('About component', () => {
  // First Test: verify the component is rendering
  it('renders', () => {
    render(<About />);
  });

  // Second Test: compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    // render About using asFragment to return a snapshot of the About component
    const { asFragment } = render(<About />);
    // test and compare if the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
});
