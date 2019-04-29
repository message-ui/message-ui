import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear'
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const { NODE_ENV = 'development' } = process.env;

export default {
  input: 'src/index.js',
  output: {
    file: 'build/messageUI.js',
    format: 'cjs',
    sourcemap: true,
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    clear({
      // required, point out which directories should be clear.
      targets: ['build'],
      // optional, whether clear the directores when rollup recompile on --watch mode.
      watch: true, // default: false
    }),
    postcss({
      plugins: [],
      minimize: true,
      extract: true,
      sourceMap: 'inline',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    resolve({
      mainFields: ['index', 'module', 'main'],
      extensions: ['.jsx', '.js', '.json']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    // terser(),
  ],
  external: ['react', 'react-dom']
}