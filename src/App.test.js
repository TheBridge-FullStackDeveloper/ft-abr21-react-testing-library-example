import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Learn React link is visible', () => {
  render(<App />);
  const linkElement = screen.queryByText('Learn React');
  expect(linkElement).toBeVisible();
});

test('Learn React link has href', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});


test('List has 4 list items', () => {
  render(<App />);
  const list = screen.getAllByText(/item/i);
  expect(list.length).toBe(4);
});

test('List items have className item', () => {
  render(<App />);
  const list = screen.getAllByText(/item/i);

  list.forEach((li)=>{
    expect(li).toHaveClass('item');
  })
});

test('Button to show and hide text', async () => {
  render(<App />);
  const button = screen.getByTestId('btn');
  const text = screen.getByTestId('text')

  expect(button).toBeVisible()
  
  await fireEvent.click(button)
  
  expect(text).not.toBeVisible()
});