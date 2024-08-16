import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



const react_dom = (
  <StrictMode>
    <App />
  </StrictMode>
);

const html_dom = document.getElementById('root');

createRoot(html_dom).render(react_dom);
