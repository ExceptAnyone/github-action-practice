import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { readFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // package.json에서 버전 정보 읽기
  const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));
  const version = packageJson.version;

  return {
    plugins: [react()],
    define: {
      __APP_VERSION__: JSON.stringify(version),
      __BUILD_TIME__: JSON.stringify(new Date()),
    },
    build: {
      rollupOptions: {
        output: {
          // 청크 파일명에 버전 정보 포함
          chunkFileNames: `assets/[name]-${version}-[hash].js`,
          entryFileNames: `assets/[name]-${version}-[hash].js`,
          assetFileNames: `assets/[name]-${version}-[hash].[ext]`,
        },
      },
    },
  };
});
