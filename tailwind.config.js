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
        assetColor: '#F2F2F2',
      },
      fontSize: {
        navbarSize: '1rem',
        heading1Size: '3.2rem',
        heading2Size: '2.2rem',
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
      boxShadow: {
        custom: '0px 0px 18.5px 1px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
