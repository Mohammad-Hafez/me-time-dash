import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SideMenu.module.css';
import { Icon } from 'react-icons-kit';
import { ic_assignment_outline } from 'react-icons-kit/md/ic_assignment_outline';
import { FaHandSparkles } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineSanitizer } from "react-icons/md";

const SideMenu = ({ t, changeLanguage }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

    const menuItems = [
        { icon: ic_assignment_outline, label: t('sideMenu.BusinessDetails'), path: '/business-details' },
        { icon: ic_assignment_outline, label: t('sideMenu.services'), path: '/services' },
        // Add more items as needed
    ];

    const handleItemClick = (index, path) => {
        setActiveIndex(index);
        navigate(path);
    };

    return (
        <div className={`${styles.sideMenu} h-full p-6 border-e-2 shadow-sm border-gray-200`}>
            <h1>LOGO</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`my-4 flex justify-start items-center cursor-pointer px-3 py-2 text-base font-medium ${activeIndex === index ? 'bg-pink-50 text-purple-900' : 'text-gray-600'} hover:bg-pink-50 hover:text-purple-900 ease-in-out duration-300 rounded-sm`}
                        onClick={() => handleItemClick(index, item.path)}
                    >
                        <Icon className='me-3 pb-1' size={24} icon={item.icon} />
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
