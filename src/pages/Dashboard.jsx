import React, { useState, useEffect } from 'react';
import { FileText, Import, Import as Export, Plus } from 'lucide-react';
import TableRow from '../components/TableRow';

export default function Dashboard() {
    const [customers, setCustomers] = useState([
        {
            name: "John Doe",
            company: "Acme Corp",
            orderValue: "$500",
            orderDate: "2023-10-01",
            status: "Pending"
        },
        {
            name: "Jane Smith",
            company: "Tech Solutions",
            orderValue: "$1200",
            orderDate: "2023-09-28",
            status: "Completed"
        },
        {
            name: "Sam Wilson",
            company: "Web Innovations",
            orderValue: "$800",
            orderDate: "2023-09-25",
            status: "Shipped"
        }
    ]);

    useEffect(() => {
        fetch("http://localhost:3000/customers")
            .then(res => res.json())
            .then(customers => setCustomers(customers));
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <section>
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="flex items-center text-lg font-semibold">
                                    <FileText size={20} className="mr-2" /> Detailed report
                                </h2>
                                <p className="text-gray-500 text-sm mt-1">Track and manage your customer orders</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-150"
                                >
                                    <Plus size={16} className="mr-2" /> Add User
                                </button>
                                <button
                                    className={`flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150`}
                                >
                                    <Import size={16} className="mr-2" /> Import
                                </button>
                                <button className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-150">
                                    <Export size={16} className="mr-2" /> Export
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="w-12 py-4 pl-4">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                    </th>
                                    <th className="text-left py-4 font-medium">CUSTOMER NAME</th>
                                    <th className="text-left py-4 font-medium">COMPANY</th>
                                    <th className="text-left py-4 font-medium">ORDER VALUE</th>
                                    <th className="text-left py-4 font-medium">ORDER DATE</th>
                                    <th className="text-left py-4 font-medium">STATUS</th>
                                    <th className="w-12 py-4 pr-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {customers.map((customer, index) => (
                                    <TableRow
                                        key={index}
                                        customer={customer}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">{customers.length} results</span>
                            <div className="flex items-center space-x-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-500 text-white">
                                    1
                                </button>
                                {[2, 3, 4].map(num => (
                                    <button key={num} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
                                        {num}
                                    </button>
                                ))}
                                <span>...</span>
                                {[10, 11].map(num => (
                                    <button key={num} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}