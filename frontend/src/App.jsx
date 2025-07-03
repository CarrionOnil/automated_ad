// File: src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import CampaignBuilder from './pages/CampaignBuilder';
import CampaignList from './pages/CampaignList';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns" element={<CampaignBuilder />} />
            <Route path="/campaigns/list" element={<CampaignList />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

