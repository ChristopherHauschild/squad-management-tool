import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import Layout from '.';

afterEach(cleanup);

describe('<Layout />', () => {
  test('Should render header and footer', () => {
    renderTestWithTheme(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    const header = screen.getByRole('banner');
    const footer = screen.getByRole('contentinfo');

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
  test('Should render children', () => {
    renderTestWithTheme(
      <BrowserRouter>
        <Layout>
          <h4>Children</h4>
        </Layout>
      </BrowserRouter>
    );
    const childrenText = screen.getByText('Children');

    expect(childrenText).toBeInTheDocument();
  });
});
