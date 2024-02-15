/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue':'#232377',
        'custom-red':'#E94646',
        'custom-sky':'#0066FF',
        'custom-white':'#000000',
        'custom-black':'#1D1D1D',
        'custom-skyblue':'#0066FF',
        'custom-lightblue':'#29298A',

                
      },  
      fontFamily: {
        Mulish: ["Mulish"," sans-serif"]
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        9: '9',
        1: '1',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
