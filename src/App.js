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
  const [apiKey, setApiKey] = useState('');
  const data = window.localStorage.getItem('Contenti');
  
  const handleApiKeyChange = (apiKey) => { setApiKey(apiKey); };

  useEffect(() => {
    const data = window.localStorage.getItem('Contenti');
    if (data) {
      setApiKey(JSON.parse(data));
      console.log('data payload is ', data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Contenti', JSON.stringify(apiKey));
  }, [apiKey]);



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
