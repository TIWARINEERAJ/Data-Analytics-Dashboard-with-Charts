import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 5000 },
  { name: 'Mar', revenue: 3000 },
  { name: 'Apr', revenue: 7000 },
  { name: 'May', revenue: 5000 },
  { name: 'Jun', revenue: 8000 },
  { name: 'Jul', revenue: 12000 },
  { name: 'Aug', revenue: 10000 },
  { name: 'Sep', revenue: 14000 },
  { name: 'Oct', revenue: 16000 },
  { name: 'Nov', revenue: 12000 },
  { name: 'Dec', revenue: 18000 },
];

const RevenueChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4361ee" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4361ee" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#4361ee"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
