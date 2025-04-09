import React from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    FolderKanban,
    BarChart3,
    MessageSquare,
    Link2
} from 'lucide-react';
import NavItem from './NavItem';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 p-6">
            <Link to="/" className="flex items-center space-x-2 mb-8">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    <img src='./Image 1858.png' />
                </span>
            </Link>

            <nav>
                <ul className="space-y-2">
                    <NavItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" />
                    <NavItem icon={<FolderKanban size={20} />} text="Projects" to="/projects" />
                    <NavItem icon={<Users size={20} />} text="Teams" to="/teams" />
                    <NavItem icon={<BarChart3 size={20} />} text="Analytics" to="/analytics" />
                    <NavItem icon={<MessageSquare size={20} />} text="Messages" to="/messages" />
                    <NavItem icon={<Link2 size={20} />} text="Integrations" to="/integrations" />
                </ul>
            </nav>

            <div className="mt-auto pt-8">
                <div className="bg-gradient-to-r p-4 rounded-xl text-white bg-blue-50">
                    <img
                        src="./Group.png"
                        alt="Upgrade banner"
                        className="w-full h-45 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold mb-2 text-center text-black">V2.0 is available</h3>
                    <button className="w-full py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors text-black">
                        Try now
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;