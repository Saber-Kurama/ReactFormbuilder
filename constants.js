import path from 'path';

const repoRoot = path.resolve(__dirname);
const srcRoot = path.join(repoRoot, 'app/');
const distRoot = path.join(repoRoot, 'dist/');


export {
  repoRoot,
  srcRoot, distRoot
};
