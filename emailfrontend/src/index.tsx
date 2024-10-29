


import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


  const App:React.FC = () => {
      return (
        <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Router>
        
        
        </>
      )
  }



root.render( <App />);

