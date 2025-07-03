// src/pages/CampaignBuilder.jsx
import { useState } from 'react';

const CampaignBuilder = () => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    description: '',
    features: '',
  });

  const handleChange = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Build New Campaign</h1>

      {/* Step 1: Product Info */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold">1. Product Information</h2>

        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            name="name"
            value={productInfo.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="E.g. Smart Lamp Pro"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={productInfo.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="What does your product do?"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Key Features</label>
          <input
            name="features"
            value={productInfo.features}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="E.g. voice-controlled, energy efficient"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignBuilder;
