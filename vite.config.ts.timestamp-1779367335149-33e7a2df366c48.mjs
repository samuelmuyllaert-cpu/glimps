// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(async ({ mode }) => {
  let componentTagger = null;
  if (mode === "development") {
    try {
      const taggerModule = await import("file:///home/project/node_modules/lovable-tagger/dist/index.js");
      componentTagger = taggerModule.componentTagger;
    } catch (e) {
      console.warn("lovable-tagger not available");
    }
  }
  return {
    server: {
      host: "::",
      port: 8080
    },
    plugins: [
      react(),
      componentTagger && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      rollupOptions: {
        external: mode === "production" ? [] : void 0
      }
    },
    ssr: {
      noExternal: ["react-helmet-async"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKHsgbW9kZSB9KSA9PiB7XG4gIGxldCBjb21wb25lbnRUYWdnZXIgPSBudWxsO1xuICBcbiAgLy8gT25seSBsb2FkIGxvdmFibGUtdGFnZ2VyIGluIGRldmVsb3BtZW50IG1vZGVcbiAgaWYgKG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YWdnZXJNb2R1bGUgPSBhd2FpdCBpbXBvcnQoXCJsb3ZhYmxlLXRhZ2dlclwiKTtcbiAgICAgIGNvbXBvbmVudFRhZ2dlciA9IHRhZ2dlck1vZHVsZS5jb21wb25lbnRUYWdnZXI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKFwibG92YWJsZS10YWdnZXIgbm90IGF2YWlsYWJsZVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogXCI6OlwiLFxuICAgICAgcG9ydDogODA4MCxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksIFxuICAgICAgY29tcG9uZW50VGFnZ2VyICYmIGNvbXBvbmVudFRhZ2dlcigpXG4gICAgXS5maWx0ZXIoQm9vbGVhbiksXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyA/IFtdIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNzcjoge1xuICAgICAgbm9FeHRlcm5hbDogWydyZWFjdC1oZWxtZXQtYXN5bmMnXSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLE9BQU8sRUFBRSxLQUFLLE1BQU07QUFDOUMsTUFBSSxrQkFBa0I7QUFHdEIsTUFBSSxTQUFTLGVBQWU7QUFDMUIsUUFBSTtBQUNGLFlBQU0sZUFBZSxNQUFNLE9BQU8sZ0VBQWdCO0FBQ2xELHdCQUFrQixhQUFhO0FBQUEsSUFDakMsU0FBUyxHQUFHO0FBQ1YsY0FBUSxLQUFLLDhCQUE4QjtBQUFBLElBQzdDO0FBQUEsRUFDRjtBQUVBLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixtQkFBbUIsZ0JBQWdCO0FBQUEsSUFDckMsRUFBRSxPQUFPLE9BQU87QUFBQSxJQUNoQixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixVQUFVLFNBQVMsZUFBZSxDQUFDLElBQUk7QUFBQSxNQUN6QztBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFlBQVksQ0FBQyxvQkFBb0I7QUFBQSxJQUNuQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
