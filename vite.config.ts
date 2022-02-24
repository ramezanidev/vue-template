import Vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";
import { defineConfig } from 'vite'

import legacy from "@vitejs/plugin-legacy";
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'

const env = {
  baseURL: "http://localhost:8080/",
  ...process.env
};

const config = defineConfig({
  define: {
    'process.env': env
  },
  build: {
    outDir: "../public/views",
  },
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      include: [
        /\.[tj]s?$/,
        /\.vue$/, /\.vue\?vue/
      ],
      imports: [
        'vue',
        'vue-router',
      ]
    }),
    WindiCSS({
      scan: {
        dirs: ['.'], 
        fileExtensions: ['vue', 'js', 'ts'],
      },
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    VitePWA({
      mode: "development",
      base: "/",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Vite App",
        short_name: "Vite App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png", 
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});

export default config;