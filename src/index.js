import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { DemoPage } from './app/pages/DemoPage';

const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(
  <React.StrictMode>
    <DemoPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
