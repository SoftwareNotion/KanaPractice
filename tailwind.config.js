module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: '#FAFAFA',
          200: '#E4E5F1',
          300: '#D2D3DB',
          400: '#9394A5',
          500: '#484B6A'
        },
        dark: {
          100: '#050505',
          200: '#0e141b',
          300: '#24282d',
          400: '#5a626c',
          500: '#95a3b7'
        }
      },
      fontFamily: {
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'], 
        'rampart-one-jp': ['Rampart One', 'sans-serif'], 
      }
    },
  },
  plugins: [],
};
