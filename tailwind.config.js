/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                display: ['Figtree, sans serif'],
            },
        },
        plugins: [formsPlugin],
    },
};
