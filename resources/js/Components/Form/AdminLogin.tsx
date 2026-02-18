import React from 'react';
import { Button, Input } from '@headlessui/react';
import validator from 'validator';
import { useForm } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function AdminLogin() {
    const route = useRoute();
    const { data, setData, post, errors, setError } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let validationFlag = false;
        if (validator.isEmpty(data.email.trim())) {
            validationFlag = true;
            setError('email', 'Email Invalid');
        }

        if (validator.isEmpty(data.password.trim())) {
            validationFlag = true;
            setError('password', 'Password Invalid');
        }

        if (!validationFlag) {
            post(route('admin_login'));
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit} method="POST">
            <h4 className="w-full text-center p-5 bg-[#CCCCDE] font-extrabold">
                Admin Login
            </h4>
            <div className="p-5 form-input-container">
                <div className="form-input-row flex flex-col-reverse mt-2">
                    <span
                        className={`validation-error ${errors.email && 'validation-error-active'}`}
                    >
                        {errors.email}
                    </span>
                    <Input
                        type="text"
                        id="email"
                        className={`form-input ${errors.email && 'form-input-notvalid'}`}
                        placeholder="User Name"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        onFocus={() => setError('email', '')}
                    />
                    <label htmlFor="email" className="text-left">
                        User Name
                    </label>
                </div>
                <div className="form-input-row flex flex-col-reverse mt-3">
                    <span
                        className={`validation-error ${errors.password && 'validation-error-active'}`}
                    >
                        {errors.password}
                    </span>
                    <Input
                        type="password"
                        id="password"
                        value={data.password}
                        className={`form-input ${errors.password && 'form-input-notvalid'}`}
                        placeholder="Password"
                        onChange={(e) => setData('password', e.target.value)}
                        onFocus={() => setError('password', '')}
                    />
                    <label htmlFor="password" className="block text-left">
                        Your password
                    </label>
                </div>
                <div className="form-input-row mt-6 form-input-checkbox flex flex-row">
                    <label className="form-checkbox-btn flex-col w-1/7">
                        <label htmlFor="remember"></label>
                        <Input
                            id="remember"
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span>Remember Me</span>
                </div>
                <div className="form-input-row mt-3 tex-center flex justify-center">
                    <Button type="submit" className="button-admin">
                        Submit
                    </Button>
                </div>
            </div>
        </form>
    );
}
