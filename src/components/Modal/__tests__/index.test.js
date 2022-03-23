// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

// Mock the toggleModal function
const mockToggleModal = jest.fn();

// Hardcode a photo
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
};

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('Modal component', () => {
  // baseline render component test
  it('renders', () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
  });

  // snapshot test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(
      <Modal
        // Arrange the snapshot - declare variables
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />
    );

    // Assert the match
    expect(asFragment()).toMatchSnapshot();
  });
});
