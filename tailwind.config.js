module.exports = {
  purge: {
    enabled: true,
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
          lightest: 'var(--color__primary--lightest)',
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
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: 'var(--color__primary)'
            },
            h2: {
              color: 'var(--color__primary)'
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
              marginBottom: '0'
            },
            h6: {
              color: 'var(--color__primary)',
              marginBottom: '0'
            }
          }
        },
        lg: {
          css: {
            h3: {
              marginBottom: '0'
            },
            h4: {
              marginBottom: '0'
            },
            h5: {
              marginBottom: '0'
            },
            h6: {
              marginBottom: '0'
            }
          }
        },
        xl: {
          css: {
            h3: {
              marginBottom: '0'
            },
            h4: {
              marginBottom: '0'
            },
            h5: {
              marginBottom: '0'
            },
            h6: {
              marginBottom: '0'
            }
          }
        },
        '2xl': {
          css: {
            h3: {
              marginBottom: '0'
            },
            h4: {
              marginBottom: '0'
            },
            h5: {
              marginBottom: '0'
            },
            h6: {
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
