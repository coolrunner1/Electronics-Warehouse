import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {store} from './state/store'
import {Provider} from "react-redux";
import AuthProvider from "react-auth-kit";
import createStore from 'react-auth-kit/createStore';

const authStore = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider
            store={authStore}
        >
            <Provider store={store}>
                <App/>
            </Provider>
        </AuthProvider>
    </StrictMode>,
)
