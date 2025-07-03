import { useState } from 'react';

const CampaignBuilder = () => {
  const [step, setStep] = useState(1);

  // Step 1: Product Info
  const [productInfo, setProductInfo] = useState({
    name: '',
    description: '',
    features: '',
  });

  // Step 2: Target Audience
  const [audience, setAudience] = useState({
    ageRange: '',
    gender: '',
    interests: '',
    location: '',
  });

  const handleProductChange = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleAudienceChange = (e) => {
    setAudience({ ...audience, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Build New Campaign</h1>

      {/* Step 1: Product Info */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold">1. Product Information</h2>

          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              name="name"
              value={productInfo.name}
              onChange={handleProductChange}
              className="w-full border rounded px-3 py-2"
              placeholder="E.g. Smart Lamp Pro"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={productInfo.description}
              onChange={handleProductChange}
              className="w-full border rounded px-3 py-2"
              placeholder="What does your product do?"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Key Features</label>
            <input
              name="features"
              value={productInfo.features}
              onChange={handleProductChange}
              className="w-full border rounded px-3 py-2"
              placeholder="E.g. voice-controlled, energy efficient"
            />
          </div>
        </div>
      )}

      {/* Step 2: Target Audience */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold">2. Target Audience</h2>

          <div>
            <label className="block font-medium mb-1">Age Range</label>
            <input
              name="ageRange"
              value={audience.ageRange}
              onChange={handleAudienceChange}
              className="w-full border rounded px-3 py-2"
              placeholder="E.g. 25-45"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={audience.gender}
              onChange={handleAudienceChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select gender</option>
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonbinary">Non-binary</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              name="location"
              value={audience.location}
              onChange={handleAudienceChange}
              className="w-full border rounded px-3 py-2"
              placeholder="E.g. United States"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Interests</label>
            <input
              name="interests"
              value={audience.interests}
              onChange={handleAudienceChange}
              className="w-full border rounded px-3 py-2"
              placeholder="E.g. tech, productivity, parenting"
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={step === 2}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CampaignBuilder;

