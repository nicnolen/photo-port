/* eslint-disable */
// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// Handle props for the nav
const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

// Test if the camera emoji is visible
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange the parts of the component we need to access
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );

    // Assert using a custom matcher to compare the expected value to the one recieved by query
    expect(getByLabelText('camera')).toHaveTextContent('📸'); // test emoji's accessibility features by querying the element by its `aria-label`
  });
});

// Check to see if some of the links are visible
describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );

    // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
});
