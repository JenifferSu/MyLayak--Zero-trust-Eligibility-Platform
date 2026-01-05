
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { spawn } from 'child_process';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mykad-runner',
      configureServer(server) {
        server.middlewares.use('/run/read-mykad', async (req, res) => {
          const scriptPath = path.resolve(__dirname, './src/backend/read_mykad.py');
          const pythonCmd = 'python';
          const child = spawn(pythonCmd, [scriptPath, '--json'], {
            cwd: path.resolve(__dirname),
          });
          let out = '';
          let err = '';
          child.stdout.on('data', (d) => (out += d.toString()));
          child.stderr.on('data', (d) => (err += d.toString()));
          child.on('close', (code) => {
            if (code !== 0) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err || 'Failed to run Python script' }));
            } else {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              try {
                JSON.parse(out);
                res.end(out);
              } catch {
                res.end(JSON.stringify({ error: 'Invalid JSON output', raw: out }));
              }
            }
          });
        });

        // New endpoint for QKD Demo (Generate + Verify Token)
        server.middlewares.use('/run/qkd-demo', async (req, res) => {
          const genScript = path.resolve(__dirname, './src/backend/generate-token.js');
          const verScript = path.resolve(__dirname, './src/backend/verify-token.js');
          
          let fullLog = "";
          
          // 1. Run generate-token.js
          const genChild = spawn('node', [genScript], { cwd: path.resolve(__dirname) });
          
          let genOut = "";
          let genErr = "";
          
          genChild.stdout.on('data', (d) => {
             const s = d.toString();
             genOut += s;
             fullLog += s;
          });
          genChild.stderr.on('data', (d) => {
             const s = d.toString();
             genErr += s;
             fullLog += s;
          });
          
          genChild.on('close', (code) => {
            if (code !== 0) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ output: fullLog, error: genErr || 'Generate token failed' }));
              return;
            }
            
            // Extract Token and Key
            // Regex based on generate-token.js output format
            // ...
            // console.log("FINAL GENERATED TOKEN (Copy this for verification):");
            // console.log("==================================================");
            // console.log(obfuscatedToken);
            // ...
            // console.log(`Key: ${SECRET_KEY}`);
            
            const tokenMatch = genOut.match(/FINAL GENERATED TOKEN \(Copy this for verification\):\s*=+\s*([\s\S]*?)\s*=+/);
            const keyMatch = genOut.match(/Key:\s*([a-f0-9]+)/i);
            
            if (!tokenMatch || !keyMatch) {
               fullLog += "\n[ERROR] Could not parse Token or Key from output.\n";
               res.statusCode = 200; 
               res.setHeader('Content-Type', 'application/json');
               res.end(JSON.stringify({ output: fullLog }));
               return;
            }
            
            const token = tokenMatch[1].trim();
            const key = keyMatch[1].trim();
            
            fullLog += "\n\n=== AUTOMATED VERIFICATION ===\n";
            
            // 2. Run verify-token.js
            const verChild = spawn('node', [verScript, token, key], { cwd: path.resolve(__dirname) });
            
            verChild.stdout.on('data', (d) => fullLog += d.toString());
            verChild.stderr.on('data', (d) => fullLog += d.toString());
            
            verChild.on('close', () => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ output: fullLog }));
            });
          });
        });
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
        'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png': path.resolve(__dirname, './src/assets/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png'),
        'figma:asset/b31e750f75fab698b65b97888c8e434c1c1b8a3c.png': path.resolve(__dirname, './src/assets/b31e750f75fab698b65b97888c8e434c1c1b8a3c.png'),
        'figma:asset/3936b9e473140f3afbf98f86e902e706ecff89d1.png': path.resolve(__dirname, './src/assets/3936b9e473140f3afbf98f86e902e706ecff89d1.png'),
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
