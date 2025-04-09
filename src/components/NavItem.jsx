import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const NavItem = ({ icon, text, to}) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link to={to}>
            <li className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer `}>
                <div className="flex items-center space-x-3">
                    {icon}
                    <span className="font-medium">{text}</span>
                </div>
            </li>
        </Link>
    );
};

export default NavItem;