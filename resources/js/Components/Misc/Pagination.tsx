import { Link } from '@inertiajs/react';
import React from 'react';

export interface PaginationInterface {
    pager: PaginationLinkInterface[];
    type?: 'admin' | null;
}

export interface PaginationLinkInterface {
    label: string;
    url?: string;
    active: boolean;
    page: number;
}

export default function Pagination(props: PaginationInterface) {
    const { pager, type } = props;
    return (
        <div className={type === 'admin' ? 'admin-pagination' : 'pagination'}>
            {pager.map((link, index) => (
                <Link
                    key={index}
                    href={link.url ?? ''}
                    className={`page-link ${link.active && 'page-active'}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
