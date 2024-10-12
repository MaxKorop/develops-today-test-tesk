import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './libs/components/app/app';
import { Provider } from 'react-redux';
import { store } from './modules/store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store.instance}>
      <App />
    </Provider>
  </StrictMode>
);
