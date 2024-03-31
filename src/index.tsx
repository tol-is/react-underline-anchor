import 'inter-ui/inter-latin.css';
import '@fontsource-variable/jetbrains-mono';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/app';
import '@/styles/reset.css';
import '@/styles/theme.css';
import '@/styles/code.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
