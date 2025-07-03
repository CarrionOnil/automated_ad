// src/components/ProductForm.jsx
import { useState } from "react";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    audience: "",
    cta: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send formData to backend for GPT ad generation
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Inventory
    </h1>

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Product Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g., SmartWater Bottle"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Description */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Product Description
        </label>
        <textarea
          name="description"
          rows={3}
          placeholder="Briefly describe the product..."
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Target Audience */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Target Audience
        </label>
        <input
          type="text"
          name="audience"
          placeholder="e.g., Health-conscious adults"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Call to Action */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Call to Action
        </label>
        <input
          type="text"
          name="cta"
          placeholder="e.g., Order Now!"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Ad Copy
      </button>
    </form>
  </div>
</div>

  );
}
