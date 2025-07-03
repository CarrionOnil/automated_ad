import { FaChartBar, FaBullhorn, FaCog, FaList, FaChevronDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto-expand submenu if you're on a nested route
    if (location.pathname.startsWith('/campaigns')) {
      setIsOpen(true);
    }
  }, [location.pathname]);

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-10">AdFlow</h2>
      <nav className="flex flex-col space-y-6 text-gray-700">
        <Link to="/" className="flex items-center gap-3 hover:text-blue-600">
          <FaChartBar /> Dashboard
        </Link>

        {/* Campaigns with link + expandable submenu */}
        <div>
          <div className="w-full flex items-center justify-between hover:text-blue-600">
            <Link
              to="/campaigns"
              className="flex items-center gap-3 w-full hover:text-blue-600"
              onClick={() => setIsOpen(true)} // ensure submenu opens
            >
              <FaBullhorn /> Campaigns
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaChevronDown
                className={`transform transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {isOpen && (
            <div className="pl-8 mt-2 flex flex-col gap-2 text-sm">
              <Link to="/campaigns/list" className="hover:text-blue-500 flex items-center gap-2">
                <FaList /> View Saved
              </Link>
            </div>
          )}
        </div>

        <Link to="/settings" className="flex items-center gap-3 hover:text-blue-600">
          <FaCog /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;




