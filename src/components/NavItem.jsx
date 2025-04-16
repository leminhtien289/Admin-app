import React from 'react';

const NavItem = ({ icon, text }) => {
    return (
        <li className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer `}>
            <div className="flex items-center space-x-3">
                {icon}
                <span className="font-medium">{text}</span>
            </div>
        </li>
    );
};

export default NavItem;