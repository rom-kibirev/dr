import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CurrentUserProvider} from "./operativeInformation/pult-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CurrentUserProvider>
            <App />
        </CurrentUserProvider>
    </React.StrictMode>
);
