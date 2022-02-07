module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "441px": '441px',
      },
      minWidth: {
        '324px': '324px',
      },
      fill: {
        '#ECDB75': '#ECDB75',
        '#F1EDEC': '#F1EDEC'
      },
      colors: {
        'backgroundContainer': '#F2F2F2',
        'headingColor': '#504A47',
        'subHeadingColor': '#F7E3DA',
        'paragraphColor': '#CEC6C3',
        'dollarBill': '#B5CC93',
        'gray': '#DDD5D3',
      },
      spacing: {
        '75px': '75px',
      },
      fontSize: {
        '0.6rem': '0.6rem' 
      }
    },
  },
  plugins: [],
}
