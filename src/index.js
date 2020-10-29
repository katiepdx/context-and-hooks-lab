import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ThemeProvider } from '../src/context/ThemeContext'

// wrap <App/> in <ThemeProvider> (from ThemeContext.js file) so entire app has access to the global state
render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
