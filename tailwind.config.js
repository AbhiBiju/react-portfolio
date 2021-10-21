module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 5s ease-in-out infinite",
      },
      rotate: {
        360: "360deg",
      },
      borderRadius: {
        blob: "74% 30% 30% 70% / 60% 40% 60% 40%;",
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover"],
      backgroundPosition: ["hover"],
      animation: ["group-hover, hover"],
    },
  },
  plugins: [],
};
