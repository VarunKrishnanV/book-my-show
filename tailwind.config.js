module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            green: {
                50: "#dcffff",
                100: "#b5f8f8",
                200: "#8af2f2",
                300: "#5fecec",
                400: "#39e7e7",
                500: "#23cdcd",
                600: "#13a0a0",
                700: "#037272",
                800: "#004545",
                900: "#001919",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
