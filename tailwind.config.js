module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.html', './src/**/*.nunj', './src/**/*.js']
  },
  darkMode: false, // Or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['intervar', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: 'var(--color__primary--light)',
          DEFAULT: 'var(--color__primary)',
          dark: 'var(--color__primary--dark)'
        },
        white: {
          DEFAULT: '#ffffff'
        },
        black: {
          DEFAULT: '#000000'
        },
        focus: {
          DEFAULT: '#FFB703'
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc'
        }
      },
      outline: {
        focus: ['3px solid #FFB703', '1px']
      },
      screens: {
        xs: '320px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
