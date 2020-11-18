import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import User from '.';

afterEach(cleanup);

describe('<User />', () => {
  test('Should render user name and initials', () => {
    renderTestWithTheme(<User />);
    const userName = screen.getByText('John Doe');
    const userInitials = screen.getByText('JD');

    expect(userName).toBeInTheDocument();
    expect(userInitials).toBeInTheDocument();
  });
  test('Should render without customHeader by default', () => {
    renderTestWithTheme(<User />);
    const userName = screen.getByText('John Doe');

    expect(userName).toHaveStyle({ color: '#090223' });
  });
  test('Should render without customHeader', () => {
    renderTestWithTheme(<User customHeader />);
    const userName = screen.getByText('John Doe');

    expect(userName).toHaveStyle({ color: '#FAFAFA' });
  });
});
