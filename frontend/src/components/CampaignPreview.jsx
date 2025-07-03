const CampaignPreview = ({ adCopy, productInfo, targetAudience, goals }) => (
  <div className="bg-white p-6 rounded-xl shadow space-y-4">
    <h2 className="text-xl font-semibold">Campaign Preview</h2>
    <div><strong>Ad Copy:</strong> {adCopy || 'Not generated yet'}</div>
    <div><strong>Product:</strong> {productInfo.name} – {productInfo.features}</div>
    <div><strong>Description:</strong> {productInfo.description}</div>
    <div><strong>Audience:</strong> {targetAudience.ageRange}, {targetAudience.gender}, {targetAudience.location}</div>
    <div><strong>Interests:</strong> {targetAudience.interests}</div>
    <div><strong>Goals:</strong> {goals.objective} – ${goals.budget} over {goals.duration}</div>
  </div>
);

export default CampaignPreview;
