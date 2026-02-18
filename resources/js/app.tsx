import './bootstrap';
import './../css/style.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Ziggy } from './ziggy.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
globalThis.Ziggy = Ziggy;

const notifyreport = {
    buttonBackground: '#ffd700',
    titleColor: '#000000',
    messageColor: '#000000',
    svgColor: '#000000',
    buttonColor: '#000000',
};

const notifyCommon = {
    fontFamily: 'ishdi',
    fontSize: '16px',
    cssAnimationStyle: 'zoom',
    width: '380px',
};

const notifyNotification = {
    textColor: '#000000',
    notiflixIconColor: '#000000',
};

Loading.init({
    className: 'app-notiflix-loading',
    fontFamily: 'ishdi',
    svgSize: '80px',
    svgColor: '#ffd700',
    messageFontSize: '16px',
    messageColor: '#000000',
});

Notify.init({
    ...notifyCommon,
    success: {
        ...notifyNotification,
        background: '#ffd700',
    },
    failure: {
        ...notifyNotification,
        background: '#e0115f',
    },
    warning: {
        ...notifyNotification,
        background: '#d2ecfa',
    },
    info: {
        ...notifyNotification,
        background: '#ffdfdf',
    },
});

Report.init({
    ...notifyCommon,
    success: notifyreport,
    failure: notifyreport,
    warning: notifyreport,
    info: notifyreport,
    titleFontSize: '18px',
    messageFontSize: '16px',
    className: 'app-notiflix-report',
});

Confirm.init({
    ...notifyCommon,
    className: 'app-notiflix-confirm',
    titleColor: '#000000',
    titleFontSize: '18px',
    messageFontSize: '16px',
    buttonsFontSize: '16px',
    okButtonColor: '#000000',
    okButtonBackground: '#ffd700',
    cancelButtonColor: '#ffffff',
    cancelButtonBackground: '#e0115f',
});

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
