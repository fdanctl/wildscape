import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/pages/Login';
import { Dashboard } from './components/pages/Dashboard';
import { Resources } from './components/pages/Resources';
import { Wildlife } from './components/pages/Wildlife';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/wildlife" element={<Wildlife/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
