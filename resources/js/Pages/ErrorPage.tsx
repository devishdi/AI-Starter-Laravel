import React from 'react';
import Layout from '../Components/Layout';

const ErrorPage = () => {
    return (
        <Layout>
            <>
                <div className="box-editorial grid grid-cols-2 justify-center items-center">
                    <div className="col-span-2 md:col-span-1 flex flex-row justify-center items-center">
                        <svg
                            width="75%"
                            height="75%"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#d26565"
                                fillRule="evenodd"
                                d="M1 2h22v8.5h-2V7H3v13h10v2H1zm18.5 12.46c.893.34 1.73.87 2.45 1.59l1.414-1.414a8.96 8.96 0 0 0-3.864-2.284zm-5 0v-2.108a8.96 8.96 0 0 0-3.864 2.284l1.414 1.414a7 7 0 0 1 2.45-1.59m0 1.084v2.333q-.17.137-.328.295l-1.415-1.415a6 6 0 0 1 1.743-1.213m5 2.333v-2.333c.631.29 1.223.694 1.743 1.213l-1.415 1.415a4 4 0 0 0-.328-.295M16 19v-7h2v7zm2 1h-2v2h2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center info-box">
                        <h2>Laravel
                             is unable to complete your request at
                            this time.
                        </h2>
                        <h5>
                            Please contact us at{' '}
                            <a
                                href="mailto:contact@example.com"
                                rel="noreferrer"
                                target="_blank"
                            >
                                contact@example.com
                            </a>{' '}
                            if the issue persists.
                        </h5>
                    </div>
                </div>
            </>
        </Layout>
    );
};

export default ErrorPage;
