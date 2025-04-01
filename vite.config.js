import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        cssMinify: 'lightningcss',
    },
    css:{
        transformer:'lightningcss',
    },
    plugins: [
        laravel(['resources/js/app.js','resources/css/app.css']),
        react(),
    ],
});
