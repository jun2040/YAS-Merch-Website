import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

// Import App component
import App from './App';

// Import CSS
import './index.css';
import './index.product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Get root element on DOM
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Inject component into root
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
