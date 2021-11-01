module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        square: "square",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        glowGreen: "0 0 5px 1px hsl(126, 100%, 48%)",
        glowBlue: "0 0 5px 1px hsl(210, 100%, 48%)",
        glowPurp: "0 0 5px 1px hsl(272, 100%, 48%)",
        fade: "inset 0 0 50px 5px black",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        vibe: {
          "0%": {},
          "50%": { backgroundColor: "hsl(126, 100%, 48%)" },
          "100%": {},
        },
        liquid: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { backgroundColor: "hsl(126, 100%, 48%)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 5s ease-in-out infinite",
        vibe: "vibe 3000ms linear infinite",
        liquid: "liquid 3000ms linear infinite",
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
      backgroundColor: ["active"],
      boxShadow: ["active", "hover"],
      borderWidth: ["hover", "focus", "active"],
      backgroundPosition: ["group-hover", "hover"],
      animation: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
