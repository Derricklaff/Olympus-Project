import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <App />
  </>
);

