import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './state/store'
import {Provider} from "react-redux";
import AuthProvider from "react-auth-kit";
import createStore from 'react-auth-kit/createStore';

const authStore = createStore({
    authType: "cookie",
    authName: "_auth",
    cookieDomain: window.location.hostname,
    cookieSecure: false
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider
          store={authStore}
      >
          <Provider store={store}>
              <App />
          </Provider>
      </AuthProvider>
  </StrictMode>,
)
