import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import postcss from "./src/cfg/postcss.config";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [
        react(),
        tsconfigPaths()
    ],
    base: "/fragro/",
    css: { postcss },
}));
