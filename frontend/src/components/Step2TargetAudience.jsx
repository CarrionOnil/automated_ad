const Step2TargetAudience = ({ audience, onChange }) => (
  <div className="bg-white p-6 rounded-xl shadow space-y-4">
    <h2 className="text-xl font-semibold">2. Target Audience</h2>
    <input name="ageRange" value={audience.ageRange} onChange={onChange} className="w-full border rounded px-3 py-2" placeholder="Age Range" />
    <select name="gender" value={audience.gender} onChange={onChange} className="w-full border rounded px-3 py-2">
      <option value="">Select gender</option>
      <option value="any">Any</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="nonbinary">Non-binary</option>
    </select>
    <input name="location" value={audience.location} onChange={onChange} className="w-full border rounded px-3 py-2" placeholder="Location" />
    <input name="interests" value={audience.interests} onChange={onChange} className="w-full border rounded px-3 py-2" placeholder="Interests" />
  </div>
);

export default Step2TargetAudience;
