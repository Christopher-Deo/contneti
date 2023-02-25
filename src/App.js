import { Route, Routes } from 'react-router-dom';
import Navigation from '././components/Navigation/Navigation';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Tweets from './pages/Tweets';
import Emails from './pages/Emails';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import './App.css';

function App() {
  //to be used in callback function to lift state from settings component
  const [apiKey, setApiKey] = useState('');

  const handleApiKeyChange = (apiKey) => { setApiKey(apiKey); };

  useEffect(() => {
    const data = localStorage.getItem(apiKey);
    if (data) {
      setApiKey(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(apiKey, JSON.stringify(apiKey));
  });

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings setApiKey={handleApiKeyChange} apiKey={apiKey} />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>

  );
}

export default App;
