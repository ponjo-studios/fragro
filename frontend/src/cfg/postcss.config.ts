import tailwindConfig from "./tailwind.config";
import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import tailwind from "tailwindcss";

const dev = process.env.NODE_ENV !== "production";

export default {
    plugins: (() => {
        let plugins = [
            // Some plugins, like TailwindCSS/Nesting, need to run before Tailwind.
            tailwind(tailwindConfig),

            // But others, like autoprefixer, need to run after.
            autoprefixer()
        ];

        !dev &&
            cssnanoPlugin({
                preset: "default"
            });

        return plugins;
    })()
};
