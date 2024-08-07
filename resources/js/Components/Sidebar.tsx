import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/Default/ApplicationLogo";
import NavLink from "@/Components/Default/NavLink";
import { User } from "@/types";
import { useState } from "react";
import React from "react";

interface SidebarProps {
    user: User;
}

const menuItems = [
    {
        title: 'Dashboard',
        route: '/dashboard',
        svg: <img src="/icon/data-bts.svg" alt="Data BTS" />,
    },
    {
        title: 'Jenis BTS',
        route: '/jenis-bts',
        svg: <img src="/icon/data-bts.svg" alt="Data BTS" />,
    },
    {
        title: 'Wilayah',
        route: '/wilayah',
        svg: <img src="/icon/data-bts.svg" alt="Data BTS" />,
    },
    {
        title: 'Data Pemilik',
        route: '/pemilik',
        svg: <img src="/icon/data-pemilik.svg" alt="Data Pemilik" />,
    },
    {
        title: 'Data Pengguna',
        route: '/pengguna',
        svg: <img src="/icon/data-pengguna.svg" alt="Data Pengguna" />,
    },
    {
        title: 'Data BTS',
        route: '/bts',
        svg: <img src="/icon/data-bts.svg" alt="Data BTS" />,
    },
    {
        title: 'Konfigurasi Kuesioner',
        route: '/data-kuesioner',
        svg: <img src="/icon/data-kuesioner.svg" alt="Data Kuesioner" />,
    },
    {
        title: 'Monitoring',
        route: '/monitoring',
        svg: <img src="/icon/data-kuesioner.svg" alt="Monitoring" />,
    },
];

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowingNavigationDropdown((prev) => !prev);
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white border-r border-gray-200 w-64 flex-shrink-0 flex flex-col fixed left-0 top-0 bottom-0 z-50">
            <div className="flex items-center justify-center h-16 border-b border-gray-200">
                <Link href="/">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-white"/>
                </Link>
            </div>
            <nav className="py-4 flex-grow flex flex-col">
                {menuItems.map((menuItem, index) => (
                    <NavLink key={index} href={menuItem.route} active={route().current(menuItem.route)} className="text-lg py-4">
                        <div className="flex items-center">
                            <span className="ml-2">{menuItem.title}</span>
                        </div>
                    </NavLink>
                ))}
            </nav>

            <div className="relative">
                {showingNavigationDropdown && (
                    <div className="bg-gray-700 absolute right-5 -top-24 mt-2 w-56 rounded-lg shadow-lg">
                        <div className="border-gray-200 flex flex-col rounded px-4 py-2 gap-2">
                            <NavLink href={route('profile.edit')} active={false} className="py-3 text-lg">Profile</NavLink>
                            <NavLink method="post" href={route('logout')} as="button" active={false} className="py-3 text-lg">
                                Log Out
                            </NavLink>
                        </div>
                    </div>
                )}
                <div className="border-t border-gray-200 py-4 cursor-pointer" onClick={toggleDropdown}>
                    <div className="px-4">
                        <div className="font-medium text-base text-white">
                            {user.name}
                        </div>
                        <div className="font-medium text-sm text-gray-300">{user.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
