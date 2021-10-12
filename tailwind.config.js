module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
    textColor:{
      'Grayish-Blue': 'hsl(225, 20%, 60%)',
      'Light-Red': 'hsl(15, 100%, 70%)',
      'Dark-Desaturated-Blue': 'hsl(227, 35%, 25%)',
      'Pale-Blue': 'hsl(226, 100%, 87%)',
      'White-hover': 'hsl(0, 0%, 100%)'
      
    },
    backgroundColor: theme => ({
      ...('colors'),
      'Strong-Cyan': 'hsl(174, 86%, 45%)',
      'Light-Grayish-Red': 'hsl(14, 92%, 95%)',
      'Dark-Desaturated-Blue': 'hsl(227, 35%, 25%)',
      'Very-Pale-Blue': 'hsl(230, 100%, 99%)',
      'Component-Background': ' hsl(0, 0%, 100%)'
      
    }),
    backgroundImage: theme => ({
      'Circle-Background': "url('./Images/pattern-circles.svg')",
      'Pattern-Background': "url('./Images/bg-pattern.svg')"
    }),
    fontFamily:{
      'Manrope': ['Manrope']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
