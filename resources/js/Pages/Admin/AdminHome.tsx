import React from 'react';
import AdminLayout from './../../Components/AdminLayout';
import AdminLogin from '@/Components/Form/AdminLogin';

const AdminHome = () => {
    return (
        <AdminLayout hideSidebar>
            <div className="admin-login-container">
                <section className="admin-login-section">
                    <AdminLogin></AdminLogin>
                </section>
            </div>
        </AdminLayout>
    );
};

export default AdminHome;
