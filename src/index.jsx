import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './Components/utils/global.context';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import ErrorPage from './Routes/ErrorPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/home" element={<Home/>} />
             <Route path="/dentist/:id" element={<Detail/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/favs" element={<Favs/>} />
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


