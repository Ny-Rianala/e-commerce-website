module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "441px": '441px'
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
        'subHeadingColor': '#E4CDC3',
        'paragraphColor': '#DED8D7',
        'dollarBill': '#B5CC93',
        // 'grayStar': '#F2F2F2',
        'gray': '#DDD5D3',
      },
      spacing: {
        '75px': '75px',
      },
    },
  },
  plugins: [],
}
