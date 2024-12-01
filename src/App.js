import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import routes, { renderRoutes } from './routes';
import LoginForm from './views/auth/Login';

function App() {
  return (
    <BrowserRouter>
        {renderRoutes()}
      
            {/*
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes> */}
    </BrowserRouter>
  );
}

export default App;
