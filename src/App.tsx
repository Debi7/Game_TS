import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './components/HelloWorld';
import "./components/index.scss";

const container = document.getElementById('root');
const root = container ? createRoot(container) : null;

root?.render(<HelloWorld />);