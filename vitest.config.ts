import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify("1.0.0"),
    __BUILD_TIME__: JSON.stringify(Date.now()),
  },
});
