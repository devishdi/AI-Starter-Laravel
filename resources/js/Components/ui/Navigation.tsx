import { Link } from '@inertiajs/react';
import React from 'react';
import { useRoute } from 'ziggy-js';

interface NavigationInterface {
    path: string;
    title: string;
}

export default function Navigation(props: NavigationInterface) {
    const { path, title } = props;
    const route = useRoute();

    return (
        <Link
            href={route(path)}
            className={`nav-link ${route().current(path) ? 'nav-link-active' : ''}`}
        >
            {title}
        </Link>
    );
}
