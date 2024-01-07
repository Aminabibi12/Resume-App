// App.jsx
import './components/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Resume from './components/Resume';
import Home from './components/Home';
import Navbar from './components/Navbar';
import HomeLink from './components/Home-link';
import HomeCards from './components/HomeCards';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  

  return (
    <div className='app'>
      

      <Routes>
      <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar />
              <Home />
              <HomeCards />
              <HomeLink />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}


export default App;
