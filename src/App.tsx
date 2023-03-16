import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import RootComponent from './components/Root/RootComponent';
import DetailGame from './pages/DetailsGame/DetailGame';
import Games from './pages/Games/Games';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootComponent />}>
          <Route path='games' element={<Games />} />
          <Route path='detail-game' element={<DetailGame />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
