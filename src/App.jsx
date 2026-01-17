import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

// Lazy load route components for code splitting
const SolutionPage = React.lazy(() => import('./components/SolutionPage'));
const MethodPage = React.lazy(() => import('./components/MethodPage'));
const CasesPage = React.lazy(() => import('./components/CasesPage'));
const PlaceholderPage = React.lazy(() => import('./components/PlaceholderPage'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-bg)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #e2e8f0',
      borderTopColor: 'var(--color-return)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oplossingen/:slug" element={<SolutionPage />} />
          <Route path="/methode" element={<MethodPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contact" element={<PlaceholderPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <AIChatbot />
    </Router>
  );
}

export default App;

