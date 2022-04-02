import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import {Home, About, Contact} from './Screens/Exports';
import { GlobalUserContext } from './GlobalStates';
function App() {
  const [user, setUser] = useState("Jalome");

  return (
    <GlobalUserContext.Provider value={{current_user:user,update_user:setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </GlobalUserContext.Provider>
  );
}

export default App;
