module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive']
  },
  plugins: [
    require('tailwindcss-blend-mode')()
  ],
}
