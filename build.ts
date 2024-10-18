import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  target: 'browser',
  naming: "[dir]/skycons-esm.[ext]",
  plugins: [
    dts()
  ],
});

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  target: 'browser',
  minify: true,
  naming: "[dir]/skycons-esm.min.[ext]",
});

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  target: 'browser',
  naming: "[dir]/skycons-esm.cjs.[ext]",
  format: 'cjs'
});
