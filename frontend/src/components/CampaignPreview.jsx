const CampaignPreview = ({ adCopy, productInfo, targetAudience, goals }) => (
  <div className="p-4 bg-white rounded-xl shadow mt-4">
    <h2 className="text-xl font-bold mb-2">Campaign Preview</h2>
    <p><strong>Ad Copy:</strong> {adCopy}</p>
    <p><strong>Product:</strong> {productInfo.name}</p>
    <p><strong>Audience:</strong> {targetAudience.demographics}</p>
    <p><strong>Goals:</strong> {goals.objective}</p>
  </div>
);

export default CampaignPreview;
