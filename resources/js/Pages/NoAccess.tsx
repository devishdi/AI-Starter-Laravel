import React from 'react';
import Layout from '../Components/Layout';
import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

const NoAccess = () => {
    const route = useRoute();
    return (
        <Layout>
            <>
                <div className="box-editorial grid grid-cols-2 justify-center items-center">
                    <div className="col-span-2 md:col-span-1 flex flex-row justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75%"
                            height="75%"
                            viewBox="0 0 15 15"
                        >
                            <path
                                fill="none"
                                stroke="#d26565"
                                d="m9.5 6.5l-4 4m-5-8v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6l-2-2h-4a1 1 0 0 0-1 1Zm7 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
                            />
                        </svg>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center info-box">
                        <h2>You dont have permission to view this page.</h2>
                        <h5>
                            Please go to{' '}
                            <Link href={route('home')}>home page</Link> and
                            continue your search.
                        </h5>
                    </div>
                </div>
            </>
        </Layout>
    );
};

export default NoAccess;
