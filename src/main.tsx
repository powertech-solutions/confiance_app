import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import AppProvider from './providers/AppProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.tsx';
import store from './redux/store.ts';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router}/>
      </AppProvider>
    </Provider>
  </React.StrictMode>
)