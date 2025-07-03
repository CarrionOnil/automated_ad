const Step1ProductInfo = ({ productInfo, onChange }) => (
  <div className="bg-white p-6 rounded-xl shadow space-y-4">
    <h2 className="text-xl font-semibold">1. Product Information</h2>
    <input name="name" value={productInfo.name} onChange={onChange} className="w-full border rounded px-3 py-2" placeholder="Product Name" />
    <textarea name="description" value={productInfo.description} onChange={onChange} className="w-full border rounded px-3 py-2" placeholder="Description" />
    <input name="features" value={productInfo.features} onChange={onChange} className="w-full border rounded px-3 py-2" placeholder="Key Features" />
  </div>
);

export default Step1ProductInfo;
