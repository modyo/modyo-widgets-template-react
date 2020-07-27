import React from 'react';
import { render } from '@testing-library/react';
import AppComponent from '../../App.jsx';

test('renders learn react link', () => {
  const { getByText } = render(<AppComponent />);
  const linkElement = getByText(/Build better digital products/i);
  expect(linkElement).toBeInTheDocument();
});
