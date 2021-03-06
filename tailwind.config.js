module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
      },
      transitionProperty: {
        'height': 'height, max-height, min-height',
        'spacing': 'margin, padding',
      }
    },
    colors: {
      primary: {
        'base': 'var(--ion-color-primary)',
        'contrast': 'var(--ion-color-primary-contrast)',
        'shade': 'var(--ion-color-primary-shade)',
        'tint': 'var(--ion-color-primary-tint)'
      },
      secondary: {
        'base': 'var(--ion-color-secondary)',
        'contrast': 'var(--ion-color-secondary-contrast)',
        'shade': 'var(--ion-color-secondary-shade)',
        'tint': 'var(--ion-color-secondary-tint)'
      },
      tertiary: {
        'base': 'var(--ion-color-tertiary)',
        'contrast': 'var(--ion-color-tertiary-contrast)',
        'shade': 'var(--ion-color-tertiary-shade)',
        'tint': 'var(--ion-color-tertiary-tint)'
      },
      success: {
        'base': 'var(--ion-color-success)',
        'contrast': 'var(--ion-color-success-contrast)',
        'shade': 'var(--ion-color-success-shade)',
        'tint': 'var(--ion-color-success-tint)'
      },
      warning: {
        'base': 'var(--ion-color-warning)',
        'contrast': 'var(--ion-color-warning-contrast)',
        'shade': 'var(--ion-color-warning-shade)',
        'tint': 'var(--ion-color-warning-tint)'
      },
      danger: {
        'base': 'var(--ion-color-danger)',
        'contrast': 'var(--ion-color-danger-contrast)',
        'shade': 'var(--ion-color-danger-shade)',
        'tint': 'var(--ion-color-danger-tint)'
      },
      dark: {
        'base': 'var(--ion-color-dark)',
        'contrast': 'var(--ion-color-dark-contrast)',
        'shade': 'var(--ion-color-dark-shade)',
        'tint': 'var(--ion-color-dark-tint)'
      },
      medium: {
        'base': 'var(--ion-color-medium)',
        'contrast': 'var(--ion-color-medium-contrast)',
        'shade': 'var(--ion-color-medium-shade)',
        'tint': 'var(--ion-color-medium-tint)'
      },
      light: {
        'base': 'var(--ion-color-light)',
        'contrast': 'var(--ion-color-light-contrast)',
        'shade': 'var(--ion-color-light-shade)',
        'tint': 'var(--ion-color-light-tint)'
      },
      white: {
        'base': 'var(--ion-color-white)',
        'contrast': 'var(--ion-color-white-contrast)',
        'shade': 'var(--ion-color-white-shade)',
        'tint': 'var(--ion-color-white-tint)'
      },
      step: {
        '50': 'var(--ion-color-step-50)',
        '100': 'var(--ion-color-step-100)',
        '150': 'var(--ion-color-step-150)',
        '200': 'var(--ion-color-step-200)',
        '250': 'var(--ion-color-step-250)',
        '300': 'var(--ion-color-step-300)',
        '350': 'var(--ion-color-step-350)',
        '400': 'var(--ion-color-step-400)',
        '450': 'var(--ion-color-step-450)',
        '500': 'var(--ion-color-step-500)',
        '550': 'var(--ion-color-step-550)',
        '600': 'var(--ion-color-step-600)',
        '650': 'var(--ion-color-step-650)',
        '700': 'var(--ion-color-step-700)',
        '750': 'var(--ion-color-step-750)',
        '800': 'var(--ion-color-step-800)',
        '850': 'var(--ion-color-step-850)',
        '900': 'var(--ion-color-step-900)',
        '950': 'var(--ion-color-step-950)',
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['active'],
    },
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
  important: true,
};
