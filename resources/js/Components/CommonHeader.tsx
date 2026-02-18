import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Link, usePage } from '@inertiajs/react';
import { SitePageProps } from './../Type';
import { useRoute } from 'ziggy-js';

const CommonHeader = () => {
    const { props: siteProps } = usePage<SitePageProps>();
    const appUrl = import.meta.env.VITE_APP_URL;
    const route = useRoute();

    if (siteProps.flash.success) {
        Notify.success(siteProps.flash.success);
    }

    if (siteProps.flash.warning) {
        Notify.warning(siteProps.flash.warning);
    }

    if (siteProps.flash.error) {
        Notify.failure(siteProps.flash.error);
    }

    return (
        <header className="container max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 lg:grid-rows-none gap-1 lg:gap-4">
            <div className="flex flex-row lg:mt-6 lg:mb-6 justify-items-center items-center">
                <Link href={route('home')}>
                    <img src={`${appUrl}logo.png`} className="logo" />
                </Link>
            </div>
            <div className="lg:justify-self-end justify-self-center self-center lg:pt-4 pb-3 w-full">
                <h2 className="text-right">Laravel AI Starter</h2>
            </div>
        </header>
    );
};

export default CommonHeader;
