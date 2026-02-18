import React, { JSX } from 'react';
import CommonAdminFooter from './CommonAdminFooter';
import CommonAdminSidebar from './CommonAdminSidebar';

interface AppLayout {
    children?: JSX.Element | JSX.Element[];
    hideSidebar?: boolean;
}

const AdminLayout = (props: AppLayout) => {
    const { children, hideSidebar = false } = props;

    return (
        <div className="app-admin-container w-screen">
            <div className="app-admin-content grid grid-flow-col grid-cols-12 min-h-full">
                {!hideSidebar && (
                    <div className="lg:col-span-2 col-span-4">
                        <section className="app-admin-sidebar h-full">
                            <CommonAdminSidebar></CommonAdminSidebar>
                        </section>
                    </div>
                )}
                <div
                    className={
                        !hideSidebar
                            ? 'col-span-8 lg:col-span-10'
                            : 'col-span-12'
                    }
                >
                    <main className="app-admin-main h-full">{children}</main>
                </div>
            </div>
            <div className="app-admin-bottom grid grid-flow-col">
                <CommonAdminFooter></CommonAdminFooter>
            </div>
        </div>
    );
};

export default AdminLayout;
