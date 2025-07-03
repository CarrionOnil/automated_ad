// src/components/Sidebar.jsx
import { FaChartBar, FaBullhorn, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-10">AdFlow</h2>
      <nav className="flex flex-col space-y-6 text-gray-700 text-base">
        <a href="#" className="flex items-center gap-3 hover:text-blue-600">
          <FaChartBar /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-blue-600">
          <FaBullhorn /> Campaigns
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-blue-600">
          <FaCog /> Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;


