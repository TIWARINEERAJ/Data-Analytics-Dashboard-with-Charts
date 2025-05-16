import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Direct', value: 35 },
  { name: 'Social Media', value: 25 },
  { name: 'Email', value: 20 },
  { name: 'Referral', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#4361ee', '#4895ef', '#4cc9f0', '#3f37c9', '#f72585'];

const TrafficChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Traffic']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficChart;
