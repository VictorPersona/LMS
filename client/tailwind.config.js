/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Ensure this matches your project structure
  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],
        default: ['15px', '21px'],
      },
    },
  },
  plugins: [],
}
