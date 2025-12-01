import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  let componentTagger = null;
  
  // Only load lovable-tagger in development mode
  if (mode === "development") {
    try {
      const taggerModule = await import("lovable-tagger");
      componentTagger = taggerModule.componentTagger;
    } catch (e) {
      console.warn("lovable-tagger not available");
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(), 
      componentTagger && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        external: mode === 'production' ? [] : undefined,
      },
    },
    ssr: {
      noExternal: ['react-helmet-async'],
    },
  };
});
