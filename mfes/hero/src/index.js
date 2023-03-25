import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import { Banner } from './components/Banners/Banner';

let root;

window.renderHero = (el) => {
  if(!el) return;

  root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <ChakraProvider>
        <Banner />
      </ChakraProvider>
    </React.StrictMode>
  );
}

window.unmountHero = () => {
  root?.unmount();
};

if(!window._containerContext) {
  window.renderHero(document.getElementById('root'));
}