import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderTestWithTheme } from '../../utils/renderTestWithTheme';

import Card from '.';

afterEach(cleanup);

describe('<Card />', () => {
  test('Should render title', () => {
    renderTestWithTheme(<Card title="Title">Children</Card>);
    const title = screen.getByText('Title');

    expect(title).toBeInTheDocument();
  });
  test('Should render extra content', () => {
    renderTestWithTheme(<Card title="Title" extraContent={<h4>Children</h4>} />);
    const childrenText = screen.getByText('Children');

    expect(childrenText).toBeInTheDocument();
  });
});
