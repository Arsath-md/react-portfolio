// Main App Component
// Handles routing for the entire application.

import './App.css';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Router Wrapper */}
      <BrowserRouter basename="/react-portfolio">

        {/* App Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
