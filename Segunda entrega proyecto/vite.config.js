import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; //importa puglin para vite /*
import { fileURLToPath, URL } from "node:url"; //para usar urls/*

export default defineConfig({
    plugins: [react()], //activa puglins/*
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)), //importaciones/*
        },
    },
});

