const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('material-ui-colors')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        extend: {
          colors: { ...colors }
        }
      }
    },
    
  },
  plugins: [],
  

  
});

