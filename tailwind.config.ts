import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",  
      },
      fontFamily: {
        kamerik: ['Kamerik105-Book']
      },
      colors:{
        secondary: 'rgb(255,159,28)'   ,
        slider1:   'rgb(101, 198, 204)',
        slider2:   'rgb(92, 182, 171)' ,
        slider3:   'rgb(64, 173, 174)' ,
        slider4:   'rgb(226, 73, 74)'  ,
        slider5:   'rgb(248, 204, 93)' ,
        footerText: '#9C9C9C',
      },
      letterSpacing: {
        customSpacing: '1px',
      }

    },
  },
  plugins: [],
};
export default config;
