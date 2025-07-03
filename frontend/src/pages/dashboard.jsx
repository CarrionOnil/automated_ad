// File: src/pages/Dashboard.jsx
import Widget from '../components/widget';
import { dashboardStats } from '../data/sampleAnalytics';
import ChartSection from '../components/ChartSection';


const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardStats.map((stat, i) => (
          <Widget key={i} {...stat} />
        ))}
      </div>

        {/* Chart Section (dual layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartSection title="Performance Overview" chartId="chart1" />
        <ChartSection title="Lead Conversion" chartId="chart2" />
      </div>


      {/* Placeholder for charts and tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-xl p-4 min-h-[250px]">
          <h2 className="font-semibold text-lg mb-2">Performance Overview</h2>
          <div className="text-sm text-gray-400">[Insert chart here]</div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 min-h-[250px]">
          <h2 className="font-semibold text-lg mb-2">Lead Conversion</h2>
          <div className="text-sm text-gray-400">[Insert chart here]</div>
        </div>
      </div>

      {/* Placeholder for a dynamic table */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <h2 className="font-semibold text-lg mb-4">Ad Performance Table</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Ad</th>
              <th className="py-2">CTR</th>
              <th className="py-2">Conversions</th>
              <th className="py-2">Budget</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Summer Sale</td>
              <td>3.2%</td>
              <td>102</td>
              <td>$300</td>
              <td className="text-green-600">Active</td>
            </tr>
            <tr>
              <td>Product Launch</td>
              <td>2.5%</td>
              <td>80</td>
              <td>$500</td>
              <td className="text-red-600">Paused</td>
            </tr>
          </tbody>
        </table>
      </div>
       
    </div>
  );
};

export default Dashboard;

// import { useEffect } from 'react';

// const Dashboard = () => {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const ChartLib = window.Chart;
//       const canvas = document.getElementById('testChart');

//       if (ChartLib && canvas) {
//         const ctx = canvas.getContext('2d');

//         new ChartLib(ctx, {
//           type: 'bar',
//           data: {
//             labels: ['Red', 'Blue'],
//             datasets: [{
//               label: '# of Votes',
//               data: [12, 19],
//               backgroundColor: ['#f87171', '#60a5fa']
//             }]
//           },
//           options: {
//             responsive: true,
//             maintainAspectRatio: false
//           }
//         });

//         clearInterval(interval);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Debug Chart</h2>
//       <div className="h-72 max-w-4xl mx-auto bg-white rounded-xl shadow p-4">
//         <canvas id="testChart" className="w-full h-full" />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



