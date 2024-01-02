/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      head: {
        'container': '1920px',
      },
      colors: {
        'listcolor': '#3D3430',
        'hovercolor': '#7258F7',
        'pcolor': '#5F5450',
        'bgcolor': '#DBD5FB',
        'bg2color': '#FCDA68',
        'butcolor': '#221A2C', 
        'but2color': '#8773EF',
        'bg3color': '#E2DDFB',
        'tcolor': '#6001D3',
        'background': '#19153D'
        
      },
      fontFamily: {
        'list': 'DM Sans',
        'pop': 'Poppins',
        'open': 'Open Sans',
        'pap': 'Paprika',
        'robo': 'Roboto',
        'nun': 'Nunito'
      },
    },
    
  },
  plugins: [],
}

