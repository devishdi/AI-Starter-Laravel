import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { usePage } from '@inertiajs/react';
import { SitePageProps } from './../../Type';
import AdminLayout from './../../Components/AdminLayout';

const AdminDashboard = () => {
    const { props: siteProps } = usePage<SitePageProps>();
    if (siteProps.flash.success) {
        Notify.success(siteProps.flash.success);
    }

    return (
        <AdminLayout>
            <div>Right</div>
        </AdminLayout>
    );
};

export default AdminDashboard;
