module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.nunj', './src/**/*.js', './src/**/*.json']
  },
  darkMode: false, // Or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['roboto', 'system-ui', 'sans-serif']
    },
    extend: {
      fontSize: {
        'xs': '1rem',
        'sm': '1.125rem',
        'tiny': '1.125rem',
        'base': '1.25rem',
        'lg': '1.5rem',
        'xl': '1.75rem',
        '2xl': '2.125rem',
        '3xl': '2.375rem',
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '5rem',
        '7xl': '6rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          cta: 'var(--color__primary--cta)',
          DEFAULT: 'var(--color__primary--900)',
          800: 'var(--color__primary--800)',
          600: 'var(--color__primary--600)',
          400: 'var(--color__primary--400)',
          200: 'var(--color__primary--200)',
          100: 'var(--color__primary--100)'
        },
        white: {
          DEFAULT: '#fcfcfc'
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
      typography: {
        DEFAULT: {
          css: {
            lineHeight: 1.5,
            fontSize: '1.25rem',
            h1: {
              color: 'var(--color__primary--900)',
              fontWeight: 700,
              lineHeight: '1.05',
              fontSize: '2.375rem'
            },
            h2: {
              color: 'var(--color__primary--900)',
              fontWeight: 700,
              lineHeight: '1.1429',
              fontSize: '1.75rem'
            },
            h3: {
              color: 'var(--color__primary--900)',
              textTransform: 'uppercase',
              marginBottom: '0',
              fontWeight: 500,
              lineHeight: '1.3',
              fontSize: '1.25rem'
            },
            h4: {
              color: 'var(--color__primary--900)',
              textTransform: 'uppercase',
              marginBottom: '0',
              fontWeight: 500
            },
            h5: {
              color: 'var(--color__primary--900)',
              marginBottom: '0'
            },
            h6: {
              color: 'var(--color__primary--900)',
              marginBottom: '0'
            },
            
          }
        },
        lg: {
          css: {
            lineHeight: 1.55,
            fontSize: '1.25rem',
            h1: {
              lineHeight: '1.0833',
              fontSize: '3rem'
            },
            h2: {
              lineHeight: '1.1176',
              fontSize: '2.125rem'
            },
            h3: {
              marginBottom: '0',
              lineHeight: '1.3',
              fontSize: '1.25rem'
            },
            h4: {
              marginBottom: '0',
              lineHeight: '1.3333'
            },
            h5: {
              marginBottom: '0'
            },
            h6: {
              marginBottom: '0'
            }
          }
        }
      },
      screens: {
        print: {raw: 'print'}
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
