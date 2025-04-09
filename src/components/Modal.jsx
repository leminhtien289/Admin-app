import React, { useState } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        orderValue: '',
        orderDate: new Date().toISOString().split('T')[0],
        status: 'New',
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name: formData.name,
            company: formData.company,
            orderValue: formData.orderValue,
            orderDate: formData.orderDate,
            status: formData.status,
        });
        onClose();
        setFormData({
            name: '',
            company: '',
            orderValue: '',
            orderDate: new Date().toISOString().split('T')[0],
            status: 'New',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Add New User</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X size={20} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="orderValue" className="block text-sm font-medium text-gray-700">
                            Order Value
                        </label>
                        <input
                            type="number"
                            id="orderValue"
                            name="orderValue"
                            required
                            min="0"
                            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                            value={formData.orderValue}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700">
                            Order Date
                        </label>
                        <input
                            type="date"
                            id="orderDate"
                            name="orderDate"
                            required
                            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                            value={formData.orderDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            required
                            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-pink-600 text-white rounded-md text-sm font-medium hover:bg-pink-700"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;