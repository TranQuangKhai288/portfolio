import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'tippy.js/dist/tippy.css';
import 'boxicons/css/boxicons.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

AOS.init({
  duration: 600,
  once: true,
  easing: 'ease-out',
  disable: prefersReducedMotion,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
