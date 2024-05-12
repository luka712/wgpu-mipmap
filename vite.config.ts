import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: "src/index.ts",
            name: "wgpu-mipmap",
            fileName: (format) => `wgpu-mipmap.${format}.js`,
        },
        rollupOptions: {
            external: ["wgpu"],
            output: {
                globals: {
                    wgpu: "wgpu",
                },
            },
        },
    },
    plugins: [
        dts()
    ],
});