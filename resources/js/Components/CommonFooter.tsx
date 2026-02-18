import React from 'react';

const CommonFooter = () => {
    const today = new Date();
    return (
        <>
            <footer className="app-footer container max-w-screen-xl mx-auto px-4 pt-5">
                <div className="text-center w-full mt-10">
                    &copy;{today.getFullYear()} Ishdi Software Solutions. All Rights Reserved
                </div>
            </footer>
        </>
    );
};

export default CommonFooter;
