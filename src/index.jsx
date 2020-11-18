import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './configs/i18n';

import App from './App';

ReactDOM.render(
  <Suspense fallback={<>Loading...</>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
