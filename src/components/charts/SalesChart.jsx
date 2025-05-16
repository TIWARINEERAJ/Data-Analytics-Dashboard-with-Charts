import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', online: 4000, offline: 2400 },
  { name: 'Feb', online: 3000, offline: 1398 },
  { name: 'Mar', online: 2000, offline: 9800 },
  { name: 'Apr', online: 2780, offline: 3908 },
  { name: 'May', online: 1890, offline: 4800 },
  { name: 'Jun', online: 2390, offline: 3800 },
  { name: 'Jul', online: 3490, offline: 4300 },
];

const SalesChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="online" name="Online Sales" fill="#4361ee" radius={[4, 4, 0, 0]} />
          <Bar dataKey="offline" name="Offline Sales" fill="#4cc9f0" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
