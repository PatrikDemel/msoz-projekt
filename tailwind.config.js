export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#F77025',
        subheadingColor: '#5E5E5E',
        darkerSectionColor: '#F9F9F9',
      },
      fontSize: {
        navbarSize: '1rem',
      },
      fontWeight: {
        regular: '400',
        semibold: '500',
        bold: '600',
        ultrabold: '700',
      },
    },
  },
  plugins: [],
};
