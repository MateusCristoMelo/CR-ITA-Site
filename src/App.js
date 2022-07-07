import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        
        <Header />

          <Routes>
            <Route path="/"  element ={<Home />}>  </Route>
            <Route exact path="/dashboard" element ={<Dashboard />}>  </Route>
            <Route exact path="/login"  element ={<Login />}> </Route>
          </Routes>

        <Footer />
      
      </Router>
    </div>
  );
}

export default App;
