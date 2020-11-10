import React from 'react';
import { ThemeProvider } from 'styled-components';

import '../node_modules/antd/dist/antd.css';

import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
