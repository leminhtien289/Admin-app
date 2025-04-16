import {
    Bell,
    HelpCircle,
    ChevronDown,
    Search
} from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">DASHBOARD</h1>
                <div className="flex items-center space-x-4">

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <div className="relative">
                        <button
                            className="p-2 hover:bg-gray-100 rounded-lg relative"

                        >
                            <Bell size={20} className="text-gray-600" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
                        </button>


                    </div>

                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <HelpCircle size={20} className="text-gray-600" />
                    </button>

                    <div className="relative">
                        <button
                            className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg p-1"

                        >
                            <img
                                src="./Avatar 313.png"
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                            <ChevronDown size={16} className="text-gray-600" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;