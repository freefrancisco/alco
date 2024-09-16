import { type Config } from "tailwindcss";
import typography from "tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    typography,
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'bg-gray-800', // Custom color for links in prose
              fontWeight: "bold",
              textDecoration: 'underline',
            },
            pre: {
              backgroundColor: 'transparent', // Remove dark background
              color: 'inherit', // Keep the same text color
            },
          },
        },
      },
    },
  },
} satisfies Config;
