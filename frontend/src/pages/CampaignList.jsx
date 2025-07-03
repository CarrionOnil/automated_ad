import { useEffect, useState } from 'react';
import { FaTrash, FaStar, FaRegStar } from 'react-icons/fa';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('campaigns') || '[]');
    setCampaigns(data);
  }, []);

  const saveCampaigns = (updated) => {
    localStorage.setItem('campaigns', JSON.stringify(updated));
    setCampaigns(updated);
  };

  const handleDelete = (id) => {
    const updated = campaigns.filter(c => c.id !== id);
    saveCampaigns(updated);
  };

  const toggleFavorite = (id) => {
    const updated = campaigns.map(c =>
      c.id === id ? { ...c, favorite: !c.favorite } : c
    );
    // sort with favorites at top
    updated.sort((a, b) => (b.favorite === true) - (a.favorite === true));
    saveCampaigns(updated);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Your Campaigns</h1>
      {campaigns.length === 0 ? (
        <p>No campaigns yet.</p>
      ) : (
        <ul className="space-y-4">
          {campaigns.map((c) => (
            <li key={c.id} className="p-4 bg-white rounded shadow relative">
              <div className="absolute top-3 right-3 flex gap-3">
                <button onClick={() => toggleFavorite(c.id)} title="Favorite">
                  {c.favorite ? <FaStar className="text-yellow-500" /> : <FaRegStar />}
                </button>
                <button onClick={() => handleDelete(c.id)} title="Delete">
                  <FaTrash className="text-red-500 hover:text-red-700" />
                </button>
              </div>
              <h2 className="text-xl font-semibold">{c.productInfo.name}</h2>
              <p><strong>Objective:</strong> {c.goals.objective}</p>
              <p><strong>Created:</strong> {new Date(c.createdAt).toLocaleString()}</p>
              <p className="text-sm text-gray-500">{c.adCopy.slice(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampaignList;


