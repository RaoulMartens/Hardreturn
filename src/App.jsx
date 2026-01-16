import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SolutionPage from './components/SolutionPage';
import MethodPage from './components/MethodPage';
import CasesPage from './components/CasesPage';
import ContactPage from './components/ContactPage';
import PlaceholderPage from './components/PlaceholderPage';
import StickyBar from './components/StickyBar';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oplossingen/:slug" element={<SolutionPage />} />
        <Route path="/methode" element={<MethodPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/kennisbank" element={<PlaceholderPage title="Kennisbank" />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <StickyBar />
      <AIChatbot />
    </Router>
  );
}

export default App;

