import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import AdminLayout from './../../Components/AdminLayout';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Pagination, {
    PaginationLinkInterface,
} from './../../Components/Misc/Pagination';
import { User, SitePageProps } from './../../Type';

interface AccountListInterface {
    users: {
        data: User[];
        links: PaginationLinkInterface[];
        total: number;
        pagination: boolean;
    };
}

const AdminAccountList = (props: AccountListInterface) => {
    const route = useRoute();
    const { users } = props;
    const { props: siteProps } = usePage<SitePageProps>();

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
        <AdminLayout>
            <div className="admin-account-container">
                <h1 className="mb-5">Admin Accounts</h1>
                {users.total > 0 ?
                    <section className="admin-account-list">
                        <div className="overflow-scroll scrollbar scrollbar-hover:scrollbar-thumb-[#d2ecfa] scrollbar-active:scrollbar-thumb-[#383f3f]">
                            <div className="admin-table">
                                <table className="table-fixed admin-table">
                                    <thead>
                                        <tr>
                                            <th>MMID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>Updated</th>
                                            <th>Email Verifiied</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map((user) => (
                                            <tr key={user.uuid}>
                                                <td>{user.mmid}</td>
                                                <td>{user.customer_name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.mobile}</td>
                                                <td>
                                                    {user.status
                                                        ? 'Active'
                                                        : 'Blocked'}
                                                </td>
                                                <td>
                                                    {user?.created_at}
                                                </td>
                                                <td>
                                                    {user?.updated_at}
                                                </td>
                                                <td>
                                                    {
                                                        user?.email_verified_at
                                                    }
                                                </td>
                                                <td>
                                                    <Link
                                                        href={route(
                                                            'admin_account',
                                                            {
                                                                uuid: user.uuid,
                                                            }
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {users.pagination && (
                            <Pagination pager={users.links} type="admin" />
                        )}
                    </section> : 
                    <div>No Result found</div>
                  }
            </div>
        </AdminLayout>
    );
};

export default AdminAccountList;
