import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';


const rootItem = document.getElementById('root');

const root = createRoot(rootItem);

root.render(<App />);
