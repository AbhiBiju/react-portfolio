module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
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
      animation: ["group-hover, hover"],
    },
  },
  plugins: [],
};
