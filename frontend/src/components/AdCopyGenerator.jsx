import { useState } from 'react';

const AdCopyGenerator = ({ productInfo, targetAudience, goals }) => {
  const [adCopy, setAdCopy] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAdCopy = async () => {
    setLoading(true);
    const response = await fetch('/api/generate-copy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productInfo, targetAudience, goals })
    });
    const data = await response.json();
    setAdCopy(data.copy);
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <button
        onClick={generateAdCopy}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? 'Generating...' : 'Generate Ad Copy'}
      </button>
      {adCopy && (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <h3 className="font-semibold">Generated Ad Copy:</h3>
          <p>{adCopy}</p>
        </div>
      )}
    </div>
  );
};

export default AdCopyGenerator;
