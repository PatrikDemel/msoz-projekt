export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#F77025',
        mainHoverColor: '#943905',
        footerColor: '#FFF5F0',
        subheadingColor: '#5E5E5E',
        darkerSectionColor: '#F9F9F9',
      },
      fontSize: {
        navbarSize: '1rem',
        heading1Size: '3.2rem',
        heading3Size: '1.3rem',
        footerIconSize: '1.8rem',
        paragraphSize: '1rem',
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
