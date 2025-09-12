/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Modern Dark Theme
      dark: {
        bg: "#0a0a0b",
        surface: "#111113",
        card: "#1a1a1c",
        border: "#2a2a2c",
        text: "#ffffff",
        textSecondary: "#a3a3a6",
        textMuted: "#6b6b70",
      },
      
      // Modern Light Theme  
      light: {
        bg: "#f8fafc",
        surface: "#ffffff",
        card: "#ffffff", 
        cardHover: "#f1f5f9",
        border: "#e2e8f0",
        borderLight: "#f1f5f9",
        text: "#0f172a",
        textSecondary: "#475569",
        textMuted: "#64748b",
        accent: "#3b82f6",
        accentHover: "#2563eb",
      },
      
      // Modern Accent Colors
      primary: {
        50: "#f0f9ff",
        100: "#e0f2fe", 
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49"
      },
      
      secondary: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe", 
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
        950: "#4a044e"
      },
      
      accent: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74", 
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407"
      },
      
      // Semantic Colors
      success: "#10b981",
      warning: "#f59e0b", 
      error: "#ef4444",
      info: "#3b82f6",
      
      // Legacy colors (for gradual migration)
      brown: "#1a1a1c",
      lightBrown: "#2a2a2c",
      darkBrown: "#111113",
      black: "#0a0a0b",
      white: "#ffffff",
      cyan: "#0ea5e9",
      lightCyan: "#38bdf8",
      darkCyan: "#0284c7",
      orange: "#f97316",
      lightOrange: "#fb923c",
      darkOrange: "#ea580c",
      grey: "#6b6b70",
      lightGrey: "#a1a1aa",
      darkGrey: "#3f3f46",
      
      // Light theme colors
      lightBg: "#fafafa",
      lightCard: "#ffffff",
      lightText: "#18181b",
      lightTextSecondary: "#52525b",
      lightAccent: "#0ea5e9",
      lightAccentHover: "#0284c7",
      lightBorder: "#e4e4e7",
    },
    extend: {
      boxShadow: {
        // Modern shadow system
        'glow-sm': '0 0 10px -2px rgba(14, 165, 233, 0.3)',
        'glow-md': '0 0 20px -4px rgba(14, 165, 233, 0.4)', 
        'glow-lg': '0 0 40px -8px rgba(14, 165, 233, 0.5)',
        'glow-xl': '0 0 60px -12px rgba(14, 165, 233, 0.6)',
        
        'accent-glow-sm': '0 0 10px -2px rgba(249, 115, 22, 0.3)',
        'accent-glow-md': '0 0 20px -4px rgba(249, 115, 22, 0.4)',
        'accent-glow-lg': '0 0 40px -8px rgba(249, 115, 22, 0.5)',
        
        'card-hover': '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
        'card-light': '0 4px 20px -4px rgba(0, 0, 0, 0.1)',
        
        // Legacy shadows (for gradual migration)
        cyanShadow: "0px 0px 20px 0px rgba(14, 165, 233, 0.4)",
        cyanBigShadow: "0px 0px 80px 20px rgba(14, 165, 233, 0.2)",
        cyanMediumShadow: "0px 0px 40px 10px rgba(14, 165, 233, 0.3)",
        orangeBigShadow: "0px 0px 80px 20px rgba(249, 115, 22, 0.2)",
        orangeMediumShadow: "0px 0px 40px 10px rgba(249, 115, 22, 0.3)",
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'url("data:image/svg+xml,%3csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3e%3cdefs%3e%3cpattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"%3e%3cpath d="M 40 0 L 0 0 0 40" fill="none" stroke="%23374151" stroke-width="1" opacity="0.1"/%3e%3c/pattern%3e%3c/defs%3e%3crect width="100%25" height="100%25" fill="url(%23grid)"/%3e%3c/svg%3e")',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px -4px rgba(14, 165, 233, 0.4)' },
          '50%': { boxShadow: '0 0 40px -4px rgba(14, 165, 233, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
