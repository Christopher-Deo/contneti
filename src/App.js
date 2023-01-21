import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './pages/Products';
import Tweets from './pages/Tweets';
import Emails from './pages/Emails';


import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tweets" element={<Tweets />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
