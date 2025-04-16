import React from 'react';

const StatCard = ({ title, value, change, icon, iconBg, trend }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm flex-1 hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <div className={`${iconBg} p-2 rounded-lg`}>
                {icon}
            </div>
        </div>
        <div className="flex items-baseline space-x-4">
            <h2 className="text-3xl font-bold">{value}</h2>
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {trend === 'up' ? '↑' : '↓'} {change}
            </span>
        </div>
    </div>
);

export default StatCard;