import { useState } from 'react';

const AdCopyGenerator = ({ productInfo, targetAudience, goals, setAdCopy }) => {
  const [loading, setLoading] = useState(false);
  const [generatedCopy, setGeneratedCopy] = useState('');

  const generate = async () => {
    setLoading(true);
    const response = await fetch('/api/generate-copy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productInfo, targetAudience, goals })
    });
    const data = await response.json();
    setGeneratedCopy(data.copy);
    setAdCopy(data.copy);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold">4. Generate Ad Copy</h2>
      <button
        onClick={generate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Generating...' : 'Generate Ad Copy'}
      </button>
      {generatedCopy && (
        <div className="mt-4 p-4 bg-gray-50 border rounded">
          <h3 className="font-medium">Generated Copy:</h3>
          <p>{generatedCopy}</p>
        </div>
      )}
    </div>
  );
};

export default AdCopyGenerator;
