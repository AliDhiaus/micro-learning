import React from 'react';
import { StatCardProps } from '../types/Global';

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
    {icon}
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-purple-200">{label}</div>
  </div>
);

export default StatCard;