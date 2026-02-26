import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const dirsToClean = [
  path.join(projectRoot, '.next'),
  path.join(projectRoot, 'node_modules', '.cache'),
  path.join(projectRoot, '.webpack'),
];

const removeDir = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✓ Cleaned: ${dirPath}`);
  }
};

console.log('Cleaning Next.js and webpack cache...\n');
dirsToClean.forEach(removeDir);
console.log('\nCache cleanup complete! Run "npm install" to reinstall dependencies.');
