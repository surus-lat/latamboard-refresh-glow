import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "h1, h2, h3, h4": {
              color: "var(--primary)",
              fontFamily: theme("fontFamily.primary"),
            },
            pre: {
              backgroundColor: "#111B27",
              padding: theme("padding.DEFAULT"),
            },
          },
        },
      }),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsla(var(--primary), <alpha-value>)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary), <alpha-value>)",
          foreground: "var(--secondary-foreground)",
        },
        tertiary: {
          DEFAULT: "hsla(var(--tertiary), <alpha-value>)",
          foreground: "var(--tertiary-foreground)",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive), <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "hsla(var(--accent), <alpha-value>)",
          foreground: "hsla(var(--accent-foreground), <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neutral: {
          0: "hsla(var(--neutral-0), <alpha-value>)",
          1: "hsla(var(--neutral-1), <alpha-value>)",
          2: "var(--neutral-2)",
          3: "var(--neutral-3)",
          4: "var(--neutral-4)",
          5: "var(--neutral-5)",
          6: "hsla(var(--neutral-6), <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        primary: ['"Figtree"', "sans-serif"].join(","),
        secondary: ['"Instrument Sans"', "sans-serif"].join(","),
        mono: ['"JetBrains Mono"', "monospace"].join(","),
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;


