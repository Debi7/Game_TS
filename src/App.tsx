import React from 'react';
import { createRoot } from 'react-dom/client';
import { GameProvider } from './contexts/GameContext';
import Game from './components/Game/index';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <GameProvider>
    <Game />
  </GameProvider>
);