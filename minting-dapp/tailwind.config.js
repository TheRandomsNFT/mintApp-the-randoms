const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {},
        fontFamily: {
            'DM': ['"DM Sans"', 'sans-serif'],
          },
          colors: {
            black: '#000',
            white: '#fff',
            yellow:{
              300:'#FFFB13',
            },
            beige: '#F6F6E8',
            blue: {
              100:'#95E3FF',
              300:'#0339EC'
            },
            purple: '#8465F8',
            coral: '#FF3359',
            green: {
              100: '#8FD75E',
              300: '#006F42'
            }
          },
          fontSize: {
            sm: ['12px','12px'],
            mobile: ['18px', '20px'],
            button: ['25px', '30px'],
            base: ['30px', '35px'],
            lg: ['40px', '50px'],
            xl: ['75px', '80px'],
            title: ['200px', '200px']
          },
    },
    variants: {},
    plugins: [],
}
