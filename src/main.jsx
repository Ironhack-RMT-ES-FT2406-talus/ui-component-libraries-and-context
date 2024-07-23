import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeWrapper } from './context/theme.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </BrowserRouter>
)


// cambios en la página
let patata = "tomate";
console.log("todo bien")