import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

export const renderTestWithTheme = (children) => {
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
