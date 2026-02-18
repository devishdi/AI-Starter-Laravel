import React, { JSX } from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';

interface AppLayout {
    children?: JSX.Element | JSX.Element[];
}

const Layout = (props: AppLayout) => {
    const { children } = props;

    return (
        <div className="app-container w-screen">
            <div className="app-top">
                <CommonHeader></CommonHeader>
            </div>
            <div className="app-content py-8">
                <main className="app-main min-h-100 container max-w-screen-xl mx-auto px-4">
                    {children}
                </main>
            </div>
            <div className="app-bottom">
                <CommonFooter></CommonFooter>
            </div>
        </div>
    );
};

export default Layout;
