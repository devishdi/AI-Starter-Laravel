import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            include: ['resources/js/Pages/*.tsx','resources/js/Components/*.tsx']
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
    ],
    server: {
        allowedHosts: ['laravel.localdev', 'laravel.frontend.localdev'],
        watch: {
            usePolling: true
        }
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
        dedupe: ['@inertiajs/react']
    }
});
