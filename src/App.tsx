import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import HomePage from './pages/HomePage';
import ConsultingPage from './pages/ConsultingPage';
import ClaimsPage from './pages/ClaimsPage';
import RiskPage from './pages/RiskPage';
import ExpertPage from './pages/ExpertPage';
import FraudPage from './pages/FraudPage';
import RenewalPage from './pages/RenewalPage';

function App() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                InsuranceGo
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link 
                to="/consulting" 
                className={`transition ${
                  location.pathname === '/consulting' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Consulting
              </Link>
              <Link 
                to="/claims" 
                className={`transition ${
                  location.pathname === '/claims' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Claims
              </Link>
              <Link 
                to="/risk" 
                className={`transition ${
                  location.pathname === '/risk' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Risk Assessment
              </Link>
              <Link 
                to="/expert" 
                className={`transition ${
                  location.pathname === '/expert' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Expert Witness
              </Link>
              <Link 
                to="/fraud" 
                className={`transition ${
                  location.pathname === '/fraud' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Fraud Detection
              </Link>
              <Link 
                to="/renewal" 
                className={`transition ${
                  location.pathname === '/renewal' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Renewal Services
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/claims" element={<ClaimsPage />} />
        <Route path="/risk" element={<RiskPage />} />
        <Route path="/expert" element={<ExpertPage />} />
        <Route path="/fraud" element={<FraudPage />} />
        <Route path="/renewal" element={<RenewalPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <span className="text-white font-bold">Insurance Business Plans</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Contact</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Insurance Business Plans. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
