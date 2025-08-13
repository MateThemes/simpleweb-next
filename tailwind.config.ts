import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
        '7xl': ['4.5rem', { lineHeight: '5.25rem' }],
      },
      spacing: {
        'section-sm': '3rem',    // 48px
        'section-md': '4rem',    // 64px
        'section-lg': '5rem',    // 80px
        'section-xl': '6rem',    // 96px
        'section-2xl': '8rem',   // 128px
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.04em',
      },
    },
  },
  plugins: [],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Reduce bundle size by only including used utilities
  corePlugins: {
    preflight: true,
    container: false, // We have our own Container component
  },
} satisfies Config;
