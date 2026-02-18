import React from 'react';
import { Button, Input } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import validator from 'validator';
import { useRoute } from 'ziggy-js';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import AdminLayout from './../../Components/AdminLayout';
import { SitePageProps, User } from './../../Type';

interface AccountInterface {
    user?: User;
}

const AdminAccount = (props: AccountInterface) => {
    const { user } = props;
    const { props: siteProps } = usePage<SitePageProps>();

    const route = useRoute();
    const {
        data,
        setData,
        post,
        delete: destroy,
        errors,
        setError,
    } = useForm({
        email: user?.email ?? '',
        customer_name: user?.customer_name ?? '',
        password: '',
        password_confirmation: '',
        mobile: user?.mobile ?? '',
        status: user?.status ?? false,
    });

    const accountDelete = () => {
        Confirm.show(
            'This action cannot be undone!',
            'Are you sure you want to delete this account?',
            'Yes',
            'No',
            () => {
                Loading.hourglass();
                destroy(route('admin_account_delete', { uuid: user?.uuid }));
                Loading.remove();
                return;
            },
            () => {
                return;
            }
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let validationFlag = false;
        if (validator.isEmpty(data.email.trim())) {
            validationFlag = true;
            setError('email', 'Email Invalid');
        }

        if (validator.isEmpty(data.customer_name.trim())) {
            validationFlag = true;
            setError('customer_name', 'Customer Name Invalid');
        }

        if (validator.isEmpty(data.mobile.trim())) {
            validationFlag = true;
            setError('mobile', 'Mobile Number Invalid');
        }

        if (!user) {
            if (validator.isEmpty(data.password.trim())) {
                validationFlag = true;
                setError('password', 'Password Invalid');
            }

            if (validator.isEmpty(data.password_confirmation.trim())) {
                validationFlag = true;
                setError('password_confirmation', 'Confirm Password Invalid');
            }
        }

        if (!validationFlag) {
            Loading.hourglass();
            post(route('admin_store', { uuid: user?.uuid }));
            Loading.remove();
            return;
        }
    };

    return (
        <AdminLayout>
            <div className="admin-account-container">
                <h1 className="mb-5">
                    {user ? 'Update Account' : 'Create New Account'}
                </h1>
                <section className="admin-account-section">
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="form-input-container">
                            <div className="flex flex-row">
                                <div className="flex-1/3 pt-3">
                                    <label>Your Name</label>
                                </div>
                                <div className="flex-2/3">
                                    <Input
                                        type="text"
                                        id="customer_name"
                                        className={`form-input ${errors.customer_name && 'form-input-notvalid'}`}
                                        placeholder="Your Name"
                                        value={data.customer_name}
                                        onChange={(e) =>
                                            setData(
                                                'customer_name',
                                                e.target.value
                                            )
                                        }
                                        onFocus={() =>
                                            setError('customer_name', '')
                                        }
                                    />
                                    <span
                                        className={`validation-error ${errors.customer_name && 'validation-error-active'}`}
                                    >
                                        {errors.customer_name}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row mt-5">
                                <div className="flex-1/3 pt-3">
                                    <label>Email</label>
                                </div>
                                <div className="flex-2/3">
                                    <Input
                                        type="text"
                                        id="email"
                                        className={`form-input ${errors.email && 'form-input-notvalid'}`}
                                        placeholder="Email Address"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        onFocus={() => setError('email', '')}
                                    />
                                    <span
                                        className={`validation-error ${errors.email && 'validation-error-active'}`}
                                    >
                                        {errors.email}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row mt-5">
                                <div className="flex-1/3 pt-3">
                                    <label>Mobile Number</label>
                                </div>
                                <div className="flex-2/3">
                                    <Input
                                        type="text"
                                        id="mobile"
                                        className={`form-input ${errors.mobile && 'form-input-notvalid'}`}
                                        placeholder="Mobile Number"
                                        value={data.mobile}
                                        onChange={(e) =>
                                            setData('mobile', e.target.value)
                                        }
                                        onFocus={() => setError('mobile', '')}
                                    />
                                    <span
                                        className={`validation-error ${errors.mobile && 'validation-error-active'}`}
                                    >
                                        {errors.mobile}
                                    </span>
                                </div>
                            </div>
                            {!user && (
                                <>
                                    <div className="flex flex-row mt-5">
                                        <div className="flex-1/3 pt-3">
                                            <label>Password</label>
                                        </div>
                                        <div className="flex-2/3">
                                            <Input
                                                type="password"
                                                id="password"
                                                className={`form-input ${errors.password && 'form-input-notvalid'}`}
                                                placeholder="Password"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        'password',
                                                        e.target.value
                                                    )
                                                }
                                                onFocus={() =>
                                                    setError('password', '')
                                                }
                                            />
                                            <span
                                                className={`validation-error ${errors.password && 'validation-error-active'}`}
                                            >
                                                {errors.password}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-5">
                                        <div className="flex-1/3 pt-3">
                                            <label>Confirm Password</label>
                                        </div>
                                        <div className="flex-2/3">
                                            <Input
                                                type="password"
                                                id="password_confirmation"
                                                className={`form-input ${errors.password_confirmation && 'form-input-notvalid'}`}
                                                placeholder="Confirm Password"
                                                value={
                                                    data.password_confirmation
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'password_confirmation',
                                                        e.target.value
                                                    )
                                                }
                                                onFocus={() =>
                                                    setError(
                                                        'password_confirmation',
                                                        ''
                                                    )
                                                }
                                            />
                                            <span
                                                className={`validation-error ${errors.password_confirmation && 'validation-error-active'}`}
                                            >
                                                {errors.password_confirmation}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="flex flex-row mt-5">
                                <div className="flex-1/3">
                                    <label>Status</label>
                                </div>
                                <div className="flex-2/3 form-input-checkbox">
                                    <label className="form-checkbox-btn flex-col w-1/7">
                                        <label htmlFor="status"></label>
                                        <Input
                                            id="status"
                                            type="checkbox"
                                            checked={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    'status',
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row mt-5">
                                <div className="flex-1/3"></div>
                                <div className="flex-1/3">
                                    <Button
                                        type="submit"
                                        className="button-admin"
                                    >
                                        Submit
                                    </Button>
                                </div>
                                <div className="flex-1/3">
                                    {user &&
                                        siteProps.auth.user?.uuid !==
                                            user.uuid && (
                                            <>
                                                <Button
                                                    type="button"
                                                    className="button-admin"
                                                    onClick={accountDelete}
                                                >
                                                    Delete
                                                </Button>
                                            </>
                                        )}
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </AdminLayout>
    );
};

export default AdminAccount;
