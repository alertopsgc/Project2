import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
  
    }
  },

  plugins: [typography]
} satisfies Config;



// import flowbite from 'flowbite/plugin';
// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     "./src/**/*.{html,js,svelte,ts}",
//     "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite],
// };

// export default config;

  
