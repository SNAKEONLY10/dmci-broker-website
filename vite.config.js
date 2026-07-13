import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        strictExecutionOrder: true,
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test: /node_modules[\\/](?:react|react-dom|react-router|react-router-dom)[\\/]/,
              priority: 20
            },
            {
              name: "vendor",
              test: /node_modules[\\/]/,
              priority: 10
            }
          ]
        }
      }
    }
  }
});
