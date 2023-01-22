import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header/Header'
import Navigation from '././components/Navigation/Navigation'

import Home from './pages/Home';
import Products from './pages/Products';
import Tweets from './pages/Tweets';
import Emails from './pages/Emails';


import './App.css';


function App() {
  return (
    <Router>
    <div className="App">

      <Navigation />
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/products" element={<Products/>} /> */}
            <Route path="/emails" element={<Emails />} />
            <Route path="/tweets" element={<Tweets />} />
          </Routes>   
      </div>
    </Router>
  );
}

export default App;
