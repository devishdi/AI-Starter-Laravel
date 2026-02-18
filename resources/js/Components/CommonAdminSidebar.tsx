import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import Navigation from './ui/Navigation';
import { SitePageProps } from './../Type';

const CommonAdminSidebar = () => {
    const [activeMenu, setActiveMenu] = useState('none');
    const route = useRoute();
    const { props: siteProps } = usePage<SitePageProps>();
    const menuClick = (menuKey: string) => {
        if (activeMenu === menuKey) {
            setActiveMenu('none');
        } else {
            setActiveMenu(menuKey);
        }
    };

    const menus = [
        {
            type: 'account',
            title: 'My Account',
            links: [
                {
                    route: 'admin_account',
                    title: 'Create Account',
                },
                {
                    route: 'admin_account_list',
                    title: 'Admin Accounts',
                },
                {
                    route: 'admin_logout',
                    title: 'Logout',
                },
            ],
        },
    ];

    const currentRoute = route().current();

    useEffect(() => {
        const activeMenuSection = menus.find((menu) =>
            menu.links.some((link) => link.route === currentRoute)
        );
        setActiveMenu(activeMenuSection?.type);
    }, [currentRoute]);

    const appUrl = import.meta.env.VITE_APP_URL;
    return (
        <div>
            <div className="admin-logo">
                <img src={appUrl + 'logo.png'} />
            </div>
            <div className="admin-side-welcome">
                <h4>Hi {siteProps.auth.user?.customerName}</h4>
            </div>
            {menus.map((menu, index) => (
                <div className="admin-side-section" key={index}>
                    <h5 onClick={() => menuClick(menu.type)}>
                        {menu.title}
                        <span>
                            {activeMenu === menu.type ? (
                                <svg
                                    className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </span>
                    </h5>
                    <ul
                        className={
                            activeMenu === menu.type
                                ? 'show-admin-side-section'
                                : 'hide-admin-side-section'
                        }
                    >
                        {menu.links.map((link, index) => (
                            <li key={index}>
                                <Navigation
                                    title={link.title}
                                    path={link.route}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CommonAdminSidebar;
