import React from 'react';
import { ShoppingCart, DollarSign, UserPlus, FileText } from 'lucide-react';
import StatCard from '../components/StatCard';
import DetailedReport from '../components/DetailedReport';

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Overview Section */}
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
            <section>
                <DetailedReport />
            </section>
        </div>
    );
}