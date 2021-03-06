module.exports = {
  important: '#app',
  purge: {
    content: [
      './components/**/*.jsx', 
      './pages/**/*.jsx',
      './styles/**/*.css'
    ],
  },
  theme: {
    extend: {
      screens: {
        'ipadp': '1030px',
        'xl': '1281px',
        '2xl': '1441px',
      },
      backgroundColor: {
        'highlight': '#00aeef',
        'afc': '#006489'
      },
      borderColor: {
        'highlight': '#00aeef',
        'afc': '#006489'
      },
      margin: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '44': '11rem',
        '52': '13rem',
        '60': '15rem',
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '10vh': '10vh',
        '15vh': '15vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      maxHeight: {
        '15': '15vh',
        '18': '18vh',
        '20': '20vh',
        '25': '25vh',
        '30': '30vh',
        '40': '40vh',
        '50': '50vh',
        '55': '55vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
        '0': '0',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        'full': '100%',
      },
      maxWidth: {
        '0': '0',
        '10': '10vw',
        '15': '15vw',
        '25': '25vw',
        '27': '27vw',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw',
        '55': '55vw',
        '60': '60vw',
        '70': '70vw',
        '80': '80vw',
      },
      minHeight: {
        '15': '15vh',
        '18': '18vh',
        '20': '20vh',
        '25': '25vh',
        '30': '30vh',
        '40': '40vh',
        '50': '50vh',
        '55': '55vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
        '110': '110vh',
        '120': '120vh',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        'full': '100%',
      },
      minWidth: {
        '0': '0',
        '10': '10vw',
        '20': '20vw',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw',
        '60': '60vw',
        '70': '70vw',
        '80': '80vw',
        '90': '90vw',
        '95': '95vw',
        '100': '100vw',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '5/12': '41.6666666%',
        'full': '100%',
      },
      padding: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '44': '11rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '10vh': '10vh',
        '15vh': '15vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '22vh': '22vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      textColor: {
        'highlight': '#00aeef',
        'afc': '#006489'
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderColor: ['responsive', 'hover', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    fontWeight: ['group-hover'],
    fontSize: ['responsive', 'hover', 'focus','group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive',  'focus', 'active', 'hover', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover'],
    minHeight: ['responsive', 'hover', 'focus', 'group-hover'],
    maxHeight: ['responsive', 'hover', 'focus', 'group-hover'],
    greyScale: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui')],
}
