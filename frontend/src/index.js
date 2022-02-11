import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import GlobalStyles from 'themes/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
