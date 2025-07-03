import { useState, useEffect } from 'react';

const Settings = () => {
  const [defaults, setDefaults] = useState(() =>
    JSON.parse(localStorage.getItem('settings') || '{}')
  );

  const updateSetting = (e) => {
    const updated = { ...defaults, [e.target.name]: e.target.value };
    setDefaults(updated);
    localStorage.setItem('settings', JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>

      <label className="block">
        Default Budget ($)
        <input
          type="number"
          name="defaultBudget"
          value={defaults.defaultBudget || ''}
          onChange={updateSetting}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </label>

      <label className="block">
        Preferred Tone
        <select
          name="tone"
          value={defaults.tone || ''}
          onChange={updateSetting}
          className="w-full border px-3 py-2 rounded mt-1"
        >
          <option value="">Neutral</option>
          <option value="friendly">Friendly</option>
          <option value="professional">Professional</option>
          <option value="bold">Bold</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
