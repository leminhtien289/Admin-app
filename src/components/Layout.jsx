import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { ShoppingCart, DollarSign, UserPlus, FileText } from 'lucide-react';
import StatCard from './StatCard';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <main className="flex-1">
                <Header />
                <section className="mb-8">
                    <h2 className="flex items-center text-lg font-semibold mb-4">
                        <FileText size={20} className="mr-2" /> Overview
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        <StatCard
                            title="Turnover"
                            value="$92,405"
                            change="5.39%"
                            icon={<ShoppingCart size={20} className="text-pink-500" />}
                            iconBg="bg-pink-50"
                            trend="up"
                        />
                        <StatCard
                            title="Profit"
                            value="$32,218"
                            change="2.15%"
                            icon={<DollarSign size={20} className="text-blue-500" />}
                            iconBg="bg-blue-50"
                            trend="down"
                        />
                        <StatCard
                            title="New customer"
                            value="298"
                            change="6.84%"
                            icon={<UserPlus size={20} className="text-purple-500" />}
                            iconBg="bg-purple-50"
                            trend="up"
                        />
                    </div>
                </section>
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;