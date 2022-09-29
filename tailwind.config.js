/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        "secondary-3": "var(--secondary-3)",

        danger: "var(--danger)",
        "danger-light": "var(--danger-light)",

        success: "var(--success)",
        "success-light": "var(--success-light)",

        "accents-1": "var(--accents-1)",
        "accents-2": "var(--accents-2)",
        "accents-3": "var(--accents-3)",
        "accents-4": "var(--accents-4)",
        "accents-5": "var(--accents-5)",
        "accents-6": "var(--accents-6)"
      }
    }
  },
  plugins: []
};
