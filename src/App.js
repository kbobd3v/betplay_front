import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Home from './Home';
import UpcomingMatches from './screens/upcomingMatches';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
      <main className="App">
      <p>Este es un parrafo narmal</p>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/matches" element={<UpcomingMatches />} />
      </Routes>
      </main>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
