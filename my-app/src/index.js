import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);











// import  ReactDOM  from "react-dom";
// import App from "./App"

// ReactDOM.render(<App />,document.getElementById('root'))




// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass 
// json-server --watch db.json --port 8000



      