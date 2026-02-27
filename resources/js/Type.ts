import type { PageProps } from '@inertiajs/core';
import { PaginationLinkInterface } from './Components/ui/Pagination';

export const DEFAULT_SELECTBOX_OPTION = {
    label: '',
    value: '',
};

export const CLIENT_API_ERROR = { message: 'Error occured', status: 'error' };

export type METHOD = 'POST' | 'GET' | 'PUT' | 'DELETE';

export type RESPONSE_STATUS = 'error' | 'success' | 'not_valid' | 'denied';

export interface SitePageProps extends PageProps {
    flash: FlashMessage;
    auth: {
        user: CurrentUser | null;
    };
    selectBox: {
        createdFor?: SelectBoxOptions[];
        caste?: SelectBoxOptions[];
        default?: {
            caste: string;
        };
    };
}

export interface KeyValuePairs {
    [key: string]: string | number;
}

export interface FlashMessage {
    success?: string;
    error?: string;
    warning?: string;
}

export interface CurrentUser {
    uuid: string;
    email: string;
    mobile: string;
    customerName: string;
}

export interface User {
    customer_name?: string;
    email: string;
    mobile: string;
    role: string;
    status: boolean;
    uuid: string;
    email_verified_at?: string;
    login?: string;
    updated_at?: string;
    created_at?: string;
}

export interface SelectBoxOptions {
    value: string;
    label: string;
}

export interface ApiResponse<T, E> {
    data?: T;
    status: RESPONSE_STATUS;
    message?: string;
    error?: E;
}