// File: src/components/Widget.jsx
const widget = ({ title, value, trend, color }) => {
  return (
    <div className={`rounded-xl p-4 shadow bg-white border-l-4 ${color}`}>
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <span className="text-xs text-gray-400">{trend}</span>
    </div>
  );
};

export default widget;

