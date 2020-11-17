import React from 'react';
import { screen, cleanup, fireEvent } from '@testing-library/react';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import Button from '.';

afterEach(cleanup);

describe('<Button />', () => {
  test('Should render the button', () => {
    const onClick = jest.fn();
    renderTestWithTheme(<Button onClick={onClick}>Text</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Text');
    expect(button).toBeInTheDocument();
  });
  test('Should call onClick function', () => {
    const onClick = jest.fn();
    renderTestWithTheme(<Button onClick={onClick}>Text</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  test('Should have the right className', () => {
    const onClick = jest.fn();
    renderTestWithTheme(
      <Button onClick={onClick} customClassName="btn">
        Text
      </Button>
    );
    const button = screen.getByRole('button');

    expect(button.classList.contains('btn')).toBeTruthy();
  });
});
