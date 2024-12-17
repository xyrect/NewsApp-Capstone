import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Programming from './pages/Programming';
import Saved from './pages/Saved';
import Indonesia from './pages/Indonesia';
import SearchResults from './pages/SearchResult';
import Footer from './components/Footer';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        document.title = 'Home - NewsSphere';
        break;
      case '/indonesia':
        document.title = 'Indonesia News - NewsSphere';
        break;
      case '/programming':
        document.title = 'Programming News - NewsSphere';
        break;
      case '/saved':
        document.title = 'Saved Articles & News - NewsSphere';
        break;
      case '/search':
        document.title = 'Search Results - NewsSphere';
        break;
      default:
        document.title = 'NewsSphere';
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavigationBar />
        <PageTitle />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
