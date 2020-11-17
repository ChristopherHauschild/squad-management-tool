import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { ThemeProvider } from 'styled-components';

import '../node_modules/antd/dist/antd.css';

import AppProvider from 'hooks';

import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

import Routes from './routes';

export function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const App = () => {
  return (
    <Router>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <QueryParamProvider ReactRouterRoute={Route}>
            <DndProvider backend={HTML5Backend}>
              <Routes />
            </DndProvider>
          </QueryParamProvider>

          <GlobalStyle />
        </ThemeProvider>
      </AppProvider>
    </Router>
  );
};

export default App;
