import { useEffect, useState } from 'react';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('campaigns') || '[]');
    setCampaigns(data);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Your Campaigns</h1>
      {campaigns.length === 0 ? (
        <p>No campaigns yet.</p>
      ) : (
        <ul className="space-y-4">
          {campaigns.map((c) => (
            <li key={c.id} className="p-4 bg-white rounded shadow">
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

