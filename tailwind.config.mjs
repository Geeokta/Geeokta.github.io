/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
           //"winter",
           // "emerald",
           // "light",
          //  "dark",
            //"cupcake",
            "acid",
            "fantasy",
            "lofi",
            "lemonade",
            "bumblebee",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            
            "pastel",
            
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            
            
            "night",
            "coffee",
          //  "winter",
            "dim",
            "nord",
            "sunset",
            "abyss"
        ],
    },
    // darkMode: ['selector', '[data-theme="synthwave"]']
};
