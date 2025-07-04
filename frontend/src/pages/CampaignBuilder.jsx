import { useState } from 'react';
import Step1ProductInfo from '../components/Step1ProductInfo';
import Step2TargetAudience from '../components/Step2TargetAudience';
import Step3GoalsBudget from '../components/Step3GoalsBudget';
import AdCopyGenerator from '../components/AdCopyGenerator';
import CampaignPreview from '../components/CampaignPreview';

const CampaignBuilder = () => {
  const [step, setStep] = useState(1);
  const [productInfo, setProductInfo] = useState({ name: '', description: '', features: '' });
  const [audience, setAudience] = useState({ ageRange: '', gender: '', interests: '', location: '' });
  const [goals, setGoals] = useState({ objective: '', budget: '', duration: '' });
  const [adCopy, setAdCopy] = useState('');

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    const newCampaign = {
      id: Date.now(),
      productInfo,
      audience,
      goals,
      adCopy,
      createdAt: new Date().toISOString()
    };
    const existing = JSON.parse(localStorage.getItem('campaigns') || '[]');
    localStorage.setItem('campaigns', JSON.stringify([newCampaign, ...existing]));
    alert('Campaign saved successfully!');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Build New Campaign</h1>

      {step === 1 && (
        <Step1ProductInfo
          productInfo={productInfo}
          onChange={(e) => setProductInfo({ ...productInfo, [e.target.name]: e.target.value })}
        />
      )}

      {step === 2 && (
        <Step2TargetAudience
          audience={audience}
          onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })}
        />
      )}

      {step === 3 && (
        <Step3GoalsBudget
          goals={goals}
          onChange={(e) => setGoals({ ...goals, [e.target.name]: e.target.value })}
        />
      )}

      {step === 4 && (
        <div className="space-y-6">
          <AdCopyGenerator
            productInfo={productInfo}
            targetAudience={audience}
            goals={goals}
            setAdCopy={setAdCopy}
          />
          <CampaignPreview
            adCopy={adCopy}
            productInfo={productInfo}
            targetAudience={audience}
            goals={goals}
          />
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit Campaign
          </button>
        </div>
      )}

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
          disabled={step === 4}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CampaignBuilder;

