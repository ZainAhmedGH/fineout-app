import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import { AdBumper } from './components/AdBumper';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <AdBumper onComplete={() => setHasEntered(true)} />;
  }

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choose-your-service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
