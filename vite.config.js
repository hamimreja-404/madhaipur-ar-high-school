import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  base:"Madhaipur-A.R.-High-School",
  plugins: [tailwindcss(), react()],
});
