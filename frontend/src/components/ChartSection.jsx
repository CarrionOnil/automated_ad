// src/components/ChartSection.jsx
import { useEffect, useRef } from 'react';

const ChartSection = ({ chartId = 'chart1', title = 'Ad Performance' }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const ChartLib = window.Chart;
      const canvas = chartRef.current;

      if (ChartLib && canvas) {
        const ctx = canvas.getContext('2d');

        new ChartLib(ctx, {
          type: 'bar',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [
              {
                label: 'CTR (%)',
                data: [2.1, 3.4, 2.8, 4.2, 3.9],
                backgroundColor: '#3b82f6',
              },
              {
                label: 'Conversions',
                data: [20, 35, 25, 40, 30],
                backgroundColor: '#10b981',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-8 max-w-4xl mx-auto">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="h-72">
        <canvas ref={chartRef} id={chartId} className="w-full h-full" />
      </div>
    </div>
  );
};

export default ChartSection;


