module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.html", "./src/**/*.nunj", "./src/**/*.js"],
  },
  darkMode: false, // Or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["intervar", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#035177",
          DEFAULT: "#023650",
          dark: "#011B28",
        },
        secondary: {
          light: "#40BEDD",
          DEFAULT: "#219EBC",
          dark: "#156579",
        },
        alternate: {
          darkest: "#FFB35C",
          dark: "#FFA033",
          DEFAULT: "#FB8500",
          light: "#E07800",
          lightest: "#B86200",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          DEFAULT: "#000000",
        },
        focus: {
          DEFAULT: "#FFB703",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      outline: {
        focus: ["3px solid #FFB703", "1px"],
      },
      screens: {
        xs: "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
