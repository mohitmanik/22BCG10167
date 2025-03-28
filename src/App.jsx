import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TopUsers from './pages/Topusers';
import TrendingPost from './pages/Trendingpost';
import Feed from './pages/feed';
const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link to="/">Topusers</Link></li>
        <li><Link to="/about">TrendingPosts</Link></li>
        <li><Link to="/contact">Feed</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TopUsers/>} />
        <Route path="/about" element={<TrendingPost/>} />
        <Route path="/contact" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
