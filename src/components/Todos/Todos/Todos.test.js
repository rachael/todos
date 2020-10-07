import React from 'react';
import { render } from '@testing-library/react';
import Todos from './Todos';

test('renders initial prompt', () => {
  const { getByText } = render(<Todos />);
  const linkElement = getByText(/What do you need to do?/i);
  expect(linkElement).toBeInTheDocument();
});
