import React from 'react';

const CommonAdminFooter = () => {
    const today = new Date();
    return (
        <footer className="app-admin-footer container max-w-screen-xl mx-auto">
            <div className="text-center w-full admin-desclaimer">
                &copy;{today.getFullYear()} Ishdi Software Solutions. All Rights Reserved
            </div>
        </footer>
    );
};

export default CommonAdminFooter;
