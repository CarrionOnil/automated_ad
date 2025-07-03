// File: src/components/sidebar.jsx
import { FaChartBar, FaBullhorn, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg min-h-screen flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-10">AdFlow</h2>
      <nav className="flex flex-col space-y-6 text-gray-700">
        <Link to="/" className="flex items-center gap-3 hover:text-blue-600">
          <FaChartBar /> Dashboard
        </Link>
        <Link to="/campaigns" className="flex items-center gap-3 hover:text-blue-600">
          <FaBullhorn /> Campaigns
        </Link>
        <Link to="/settings" className="flex items-center gap-3 hover:text-blue-600">
          <FaCog /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;


