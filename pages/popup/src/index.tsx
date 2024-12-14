import { createRoot } from 'react-dom/client';
import '@src/index.css';
import React from 'react';
import Popup from '@src/Popup';
import { NextUIProvider } from '@nextui-org/react';

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  root.render(
    <React.StrictMode>
      <NextUIProvider>
        <Popup />
      </NextUIProvider>
    </React.StrictMode>,
  );
}

init();
