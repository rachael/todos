import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todos from './Todos';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Todos />, div);
});

test('renders initial prompt', () => {
  const { getByPlaceholderText } = render(<Todos />);
  const promptElement = getByPlaceholderText(/What do you need to do?/i);
  expect(promptElement).toBeInTheDocument();
});

test('can add todo', () => {
  const { getByPlaceholderText, getByText } = render(<Todos />);
  const promptElement = getByPlaceholderText(/What do you need to do?/i);
  userEvent.type(promptElement, 'something{enter}');
  const todoElement = getByText(/something/i);
  expect(todoElement).toBeInTheDocument();
});

test('can add multiple todos', () => {
  const { getByPlaceholderText, getByText } = render(<Todos />);
  const promptElement = getByPlaceholderText(/What do you need to do?/i);
  userEvent.type(promptElement, 'something{enter}');
  userEvent.type(promptElement, 'smth else{enter}');
  const todoElement1 = getByText(/something/i);
  const todoElement2 = getByText(/smth else/i);
  expect(todoElement1).toBeInTheDocument();
  expect(todoElement2).toBeInTheDocument();
});

test('can complete todo', () => {
  const { getByPlaceholderText, getByText, getByTitle } = render(<Todos />);
  const promptElement = getByPlaceholderText(/What do you need to do?/i);
  userEvent.type(promptElement, 'something{enter}');
  const completeElement = getByTitle(/Todo-Complete/i);
  userEvent.click(completeElement);
  const todoElement = getByText(/something/i);
  expect(todoElement).toHaveClass('Todo-Text_complete');
});

test('can add multiple todos and complete single todo', () => {
  const { getByPlaceholderText, getByText, getAllByTitle } = render(<Todos />);
  const promptElement = getByPlaceholderText(/What do you need to do?/i);
  userEvent.type(promptElement, 'something{enter}');
  userEvent.type(promptElement, 'smth else{enter}');
  const todoElement1 = getByText(/something/i);
  const todoElement2 = getByText(/smth else/i);
  const completeElement = getAllByTitle(/Todo-Complete/i)[1];
  userEvent.click(completeElement);
  const todoElement = getByText(/smth else/i);
  expect(todoElement).toHaveClass('Todo-Text_complete');
});

test('can remove todo', () => {
  const { getByPlaceholderText, getByText, getByTitle } = render(<Todos />);
  const promptElement = getByPlaceholderText(/What do you need to do?/i);
  userEvent.type(promptElement, 'something{enter}');
  const todoElement = getByText(/something/i);
  const removeElement = getByTitle(/Todo-Remove/i);
  userEvent.click(removeElement);
  expect(todoElement).not.toBeInTheDocument();
});

test('can add multiple todos and remove single todo', () => {
  const { getByPlaceholderText, getByText, getAllByTitle } = render(<Todos />);
  const promptElement = getByPlaceholderText(/What do you need to do?/i);
  userEvent.type(promptElement, 'something{enter}');
  userEvent.type(promptElement, 'smth else{enter}');
  const todoElement1 = getByText(/something/i);
  const todoElement2 = getByText(/smth else/i);
  const removeElement = getAllByTitle(/Todo-Remove/i)[1];
  userEvent.click(removeElement);
  expect(todoElement1).toBeInTheDocument();
  expect(todoElement2).not.toBeInTheDocument();
});
