import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App/App.jsx';
import { GlobalStyle } from '/src/styles/GlobalStyles.js';
import { theme } from '/src/styles/theme.js';
import { MyProvider } from '/src/components/Context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MyProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </MyProvider>
    </ThemeProvider>
  </React.StrictMode>
);
