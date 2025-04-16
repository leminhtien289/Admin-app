import React from 'react';
import { Pencil } from 'lucide-react';

const TableRow = ({ customer, onEdit }) => {
    const statusColors = {
        'New': 'bg-blue-50 text-blue-600',
        'In-progress': 'bg-yellow-50 text-yellow-600',
        'Completed': 'bg-green-50 text-green-600'
    };

    return (
        <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="py-4 pl-4">
                <input type="checkbox" className="rounded border-gray-300" />
            </td>
            <td className="py-4">
                <div className="flex items-center space-x-3">
                    <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full" />
                    <span className="font-medium">{customer.name}</span>
                </div>
            </td>
            <td className="py-4 text-gray-600">{customer.company}</td>
            <td className="py-4 font-medium">{customer.value}</td>
            <td className="py-4 text-gray-500">{customer.date}</td>
            <td className="py-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[customer.status]}`}>
                    {customer.status}
                </span>
            </td>
            <td className="py-4 pr-4">
                <button
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150"
                    onClick={() => onEdit(customer)}
                >
                    <Pencil size={16} className="text-gray-400" />
                </button>
            </td>
        </tr>
    );
};

export default TableRow;