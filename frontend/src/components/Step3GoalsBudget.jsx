const Step3GoalsBudget = ({ goals, onChange }) => (
  <div className="bg-white p-6 rounded-xl shadow space-y-4">
    <h2 className="text-xl font-semibold">3. Campaign Goals & Budget</h2>
    <select name="objective" value={goals.objective} onChange={onChange} className="w-full border rounded px-3 py-2">
      <option value="">Select objective</option>
      <option value="awareness">Brand Awareness</option>
      <option value="leads">Lead Generation</option>
      <option value="sales">Sales</option>
      <option value="installs">App Installs</option>
    </select>
    <input name="budget" value={goals.budget} onChange={onChange} type="number" className="w-full border rounded px-3 py-2" placeholder="Budget ($)" />
    <input name="duration" value={goals.duration} onChange={onChange} className="w-full border rounded px-3 py-2" placeholder="Campaign Duration" />
  </div>
);

export default Step3GoalsBudget;
