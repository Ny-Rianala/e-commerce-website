module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "470px": '470px',
      },
      width: {
        '344px': '344px',
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
        '71px': '71px',
        '704px': '704px',
        '8px': '8px',
        '4.45rem': '4.45rem',
      },
      fontSize: {
        '0.6rem': '0.6rem' 
      },
    },
  },
  plugins: [],
}
