import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


import 'primereact/resources/themes/arya-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 

const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
);
