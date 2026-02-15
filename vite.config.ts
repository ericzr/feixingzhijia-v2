
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import fs from 'fs';

  export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    plugins: [
      react(),
      // GitHub Pages：复制 index.html 为 404.html，使任意路径都回退到 SPA
      {
        name: 'copy-404',
        closeBundle() {
          const outDir = 'build';
          const indexPath = path.resolve(__dirname, outDir, 'index.html');
          const errPath = path.resolve(__dirname, outDir, '404.html');
          if (fs.existsSync(indexPath)) {
            fs.copyFileSync(indexPath, errPath);
          }
        },
      },
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/ed6745bf59d06075acbfe77e5efc0d0bf06e96cf.png': path.resolve(__dirname, './src/assets/ed6745bf59d06075acbfe77e5efc0d0bf06e96cf.png'),
        'figma:asset/e2f4960d39e1f68c9217bc5627b8988d702d7063.png': path.resolve(__dirname, './src/assets/e2f4960d39e1f68c9217bc5627b8988d702d7063.png'),
        'figma:asset/c8760556f997d8f4de73d9ee2295ecfc5e81c9cf.png': path.resolve(__dirname, './src/assets/c8760556f997d8f4de73d9ee2295ecfc5e81c9cf.png'),
        'figma:asset/c4d66ad14a541aa69f81b292d69b3f7460ae1495.png': path.resolve(__dirname, './src/assets/c4d66ad14a541aa69f81b292d69b3f7460ae1495.png'),
        'figma:asset/bc04c8b86436de60e37006373742bcf2441b3e32.png': path.resolve(__dirname, './src/assets/bc04c8b86436de60e37006373742bcf2441b3e32.png'),
        'figma:asset/b6d343e05612d44b97bbab494471adbf30e97f90.png': path.resolve(__dirname, './src/assets/b6d343e05612d44b97bbab494471adbf30e97f90.png'),
        'figma:asset/b09709e778f439f32a9febe92279437ea0d30df6.png': path.resolve(__dirname, './src/assets/b09709e778f439f32a9febe92279437ea0d30df6.png'),
        'figma:asset/a524ec1b35839fa4851914215a235d9a0ea36264.png': path.resolve(__dirname, './src/assets/a524ec1b35839fa4851914215a235d9a0ea36264.png'),
        'figma:asset/8ffb7e8035fd9567e0abaf6e6e2447d5e8322953.png': path.resolve(__dirname, './src/assets/8ffb7e8035fd9567e0abaf6e6e2447d5e8322953.png'),
        'figma:asset/76f163a40e2d991fc7ab847f3f1ab4100b066d93.png': path.resolve(__dirname, './src/assets/76f163a40e2d991fc7ab847f3f1ab4100b066d93.png'),
        'figma:asset/769704668524c3f1af5292edec2aaea12df89ff0.png': path.resolve(__dirname, './src/assets/769704668524c3f1af5292edec2aaea12df89ff0.png'),
        'figma:asset/687fc8d845eff016cff2723b45b8fcd3327cfcec.png': path.resolve(__dirname, './src/assets/687fc8d845eff016cff2723b45b8fcd3327cfcec.png'),
        'figma:asset/62171306455ca04227918566b78bf562da60b0dc.png': path.resolve(__dirname, './src/assets/62171306455ca04227918566b78bf562da60b0dc.png'),
        'figma:asset/463ff96875b1b73f521112918ccfa0e92f173e68.png': path.resolve(__dirname, './src/assets/463ff96875b1b73f521112918ccfa0e92f173e68.png'),
        'figma:asset/328c9f3bb34b230a180a3017520175de60298f7a.png': path.resolve(__dirname, './src/assets/328c9f3bb34b230a180a3017520175de60298f7a.png'),
        'figma:asset/326848447b1d7edcc4c5247621b1019b860e42fd.png': path.resolve(__dirname, './src/assets/326848447b1d7edcc4c5247621b1019b860e42fd.png'),
        'figma:asset/317c537af86a8cc05f64b937e22202cec91b2175.png': path.resolve(__dirname, './src/assets/317c537af86a8cc05f64b937e22202cec91b2175.png'),
        'figma:asset/164619794ffbf2f839de387dce542601577a2add.png': path.resolve(__dirname, './src/assets/164619794ffbf2f839de387dce542601577a2add.png'),
        'figma:asset/0b0f7af66b3cb375f80f9d150128fedbc168e3d7.png': path.resolve(__dirname, './src/assets/0b0f7af66b3cb375f80f9d150128fedbc168e3d7.png'),
        'figma:asset/01e2e1b36c7a5bdd716f3f0686228588634a8ffc.png': path.resolve(__dirname, './src/assets/01e2e1b36c7a5bdd716f3f0686228588634a8ffc.png'),
        'figma:asset/010069067d2f657cfdc762b53e8f8dd88aceddc4.png': path.resolve(__dirname, './src/assets/010069067d2f657cfdc762b53e8f8dd88aceddc4.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });
