import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import Header from '.';

afterEach(cleanup);

describe('<Header />', () => {
  test('Should render logo', () => {
    renderTestWithTheme(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoImg = screen.getByRole('img');

    expect(logoImg).toBeInTheDocument();
  });
  test('Should render title', () => {
    renderTestWithTheme(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
  });
});
