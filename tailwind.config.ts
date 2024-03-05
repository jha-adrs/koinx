import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground-1': 'var(--foreground)',
        'foreground-2': 'var(--foreground-secondary)',
        'foreground-3': 'var(--foreground-tertiary)',
        'foreground-4': 'var(--foreground-quaternary)',
        'foreground-muted': 'var(--foreground-muted)',
        'card-background': 'var(--card-background)',
        'background': 'var(--background)',
        'card-stroke': 'var(--card-stroke)',
        'destructive-background': 'var(--destructive-background)',
        'blue': 'var(--blue)',
        'blue-accent': 'var(--blue-accent)',
        'red-muted': 'var(--red-muted)',
        'green': 'var(--green)',
      }
    },
  },
  plugins: [],
};
export default config;
