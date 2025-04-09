import { useState, useRef } from 'react';
import { Pencil, Upload, Download, UserPlus } from 'lucide-react';
import Modal from './Modal';

const allOrders = [
    {
        id: 1,
        customer: { name: 'Elizabeth Lee', avatar: 'https://i.pravatar.cc/40?img=1' },
        company: 'AvatarSystems',
        value: 359,
        date: '10/07/2023',
        status: 'New'
    },
    {
        id: 2,
        customer: { name: 'Carlos Garcia', avatar: 'https://i.pravatar.cc/40?img=2' },
        company: 'SmoozeShift',
        value: 747,
        date: '24/07/2023',
        status: 'New'
    },
    {
        id: 3,
        customer: { name: 'Elizabeth Bailey', avatar: 'https://i.pravatar.cc/40?img=3' },
        company: 'Prime Time Telecom',
        value: 564,
        date: '08/08/2023',
        status: 'In-progress'
    },
    {
        id: 4,
        customer: { name: 'Ryan Brown', avatar: 'https://i.pravatar.cc/40?img=4' },
        company: 'OmniTech Corporation',
        value: 541,
        date: '31/08/2023',
        status: 'In-progress'
    },
    {
        id: 5,
        customer: { name: 'Ryan Young', avatar: 'https://i.pravatar.cc/40?img=5' },
        company: 'DataStream Inc.',
        value: 769,
        date: '01/05/2023',
        status: 'Completed'
    },
    {
        id: 6,
        customer: { name: 'Hailey Adams', avatar: 'https://i.pravatar.cc/40?img=6' },
        company: 'FlowRush',
        value: 922,
        date: '10/06/2023',
        status: 'Completed'
    },
    {
        id: 7,
        customer: { name: 'Michael Chen', avatar: 'https://i.pravatar.cc/40?img=7' },
        company: 'TechFlow Solutions',
        value: 845,
        date: '15/07/2023',
        status: 'New'
    },
    {
        id: 8,
        customer: { name: 'Sarah Wilson', avatar: 'https://i.pravatar.cc/40?img=8' },
        company: 'CloudNine Systems',
        value: 632,
        date: '22/07/2023',
        status: 'In-progress'
    },
    {
        id: 9,
        customer: { name: 'James Rodriguez', avatar: 'https://i.pravatar.cc/40?img=9' },
        company: 'Quantum Dynamics',
        value: 978,
        date: '03/08/2023',
        status: 'Completed'
    },
    {
        id: 10,
        customer: { name: 'Emma Thompson', avatar: 'https://i.pravatar.cc/40?img=10' },
        company: 'Digital Nexus',
        value: 456,
        date: '12/08/2023',
        status: 'New'
    },

    ...[...Array(53)].map((_, index) => ({
        id: index + 11,
        customer: {
            name: `Customer ${index + 11}`,
            avatar: `https://i.pravatar.cc/40?img=${index + 11}`
        },
        company: `Company ${index + 11}`,
        value: Math.floor(Math.random() * 1000) + 300,
        date: `${Math.floor(Math.random() * 28) + 1}/08/2023`,
        status: ['New', 'In-progress', 'Completed'][Math.floor(Math.random() * 3)]
    }))
];

export default function DetailedReport() {
    const [orders, setOrders] = useState(allOrders);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentOrders = orders.slice(startIndex, endIndex);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Hàm để mở modal thêm người dùng
    const openAddUserModal = () => {
        setIsModalOpen(true);
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(currentOrders.map(order => order.id));
        }
        setSelectAll(!selectAll);
    };

    const handleSelectItem = (id) => {
        setSelectedItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setSelectAll(false);
        setSelectedItems([]);
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            for (let i = 1; i <= 4; i++) pages.push(i);
            pages.push('...');
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(1);
            pages.push('...');
            for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            pages.push('...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
            pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="bg-white rounded-xl p-6 mt-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Detailed report</h2>
                <div className="flex gap-3">
                    <button
                        onClick={openAddUserModal}
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    >
                        <UserPlus size={20} />
                        Add User
                    </button>
                    <button
                        className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50 flex items-center gap-2"
                    >
                        <Upload size={16} />
                        Import
                    </button>
                    <button
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 flex items-center gap-2"
                    >
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-500">
                            <th className="pb-4 font-normal">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className="pb-4 font-normal">CUSTOMER NAME</th>
                            <th className="pb-4 font-normal">COMPANY</th>
                            <th className="pb-4 font-normal">ORDER VALUE</th>
                            <th className="pb-4 font-normal">ORDER DATE</th>
                            <th className="pb-4 font-normal">STATUS</th>
                            <th className="pb-4 font-normal"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map((order) => (
                            <tr key={order.id} className="border-t border-gray-100">
                                <td className="py-4">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300"
                                        checked={selectedItems.includes(order.id)}
                                        onChange={() => handleSelectItem(order.id)}
                                    />
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={order.customer.avatar} className="w-8 h-8 rounded-full" alt={order.customer.name} />
                                        <span className="font-medium">{order.customer.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-gray-600">{order.company}</td>
                                <td className="py-4 text-gray-600">${order.value}</td>
                                <td className="py-4 text-gray-400">{order.date}</td>
                                <td className="py-4">
                                    <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'New' ? 'bg-blue-50 text-blue-600' :
                                        order.status === 'In-progress' ? 'bg-yellow-50 text-yellow-600' :
                                            'bg-green-50 text-green-600'
                                        }`}>{order.status}</span>
                                </td>
                                <td className="py-4">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                                        <Pencil size={16} className="text-gray-400" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-6">
                <div className="text-gray-600">{orders.length} results</div>
                <div className="flex items-center gap-2">
                    <button
                        className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg"
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                            <span key={`ellipsis-${index}`} className="text-gray-400">...</span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => handlePageChange(Number(page))}
                                className={`p-2 rounded-lg ${currentPage === page
                                    ? 'bg-pink-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                    <button
                        className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg"
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>

            {/* Hiển thị component Modal và truyền các props cần thiết */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}