import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const NavItem = ({ icon, text, to }) => {
    const location = useLocation();
    const active = location.pathname === to;

    // useLocation: Một hook được cung cấp bởi react-router-dom. Nó cho phép bạn truy cập đối tượng location hiện tại. Đối tượng location chứa thông tin về URL hiện tại, bao gồm pathname(đường dẫn của URL), search(chuỗi query), hash(phần hash của URL), và state(trạng thái được truyền khi chuyển trang).
    // Mỗi khi URL trong ứng dụng thay đổi, component này sẽ re-render và location sẽ được cập nhật
    return (
        <Link to={to}>
            <li className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${active ? 'bg-pink-500 text-white' : 'hover:bg-gray-100'}`}>
                <div className="flex items-center space-x-3">
                    {icon}
                    <span className="font-medium">{text}</span>
                </div>
            </li>
        </Link>
    );
};

export default NavItem;