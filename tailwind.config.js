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
          lighter: 'var(--color__primary--lighter)',
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
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: 'var(--color__primary)',
              fontSize: '2.5em'
            },
            h2: {
              color: 'var(--color__primary)',
              fontSize: '2em'
            },
            h3: {
              color: 'var(--color__primary)',
              textTransform: 'uppercase',
              marginBottom: '0'
            },
            h4: {
              color: 'var(--color__primary)',
              textTransform: 'uppercase',
              marginBottom: '0'
            },
            h5: {
              color: 'var(--color__primary)',
              textTransform: 'uppercase',
              marginBottom: '0'
            },
            h6: {
              color: 'var(--color__primary)',
              textTransform: 'uppercase',
              marginBottom: '0'
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
