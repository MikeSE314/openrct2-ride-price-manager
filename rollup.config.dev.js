import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { join } from 'path';

export default {
  input: './src/registerPlugin.ts',
  output: {
    file: join(process.env.HOME, '/Library/Application Support/OpenRCT2/plugin/Ride Price Manager.js'),
    format: 'iife',
  },
  plugins: [
    typescript(),
    terser({
      compress: false,
      format: {
        beautify: true,
        quote_style: 1,
        wrap_iife: true,
        preamble: '// Mod powered by https://github.com/wisnia74/openrct2-typescript-mod-template - MIT license',
      },
      mangle: false,
    }),
  ],
};
