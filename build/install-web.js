import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义源文件和目标目录
const sourceFilejs = path.join(__dirname, '../dist/BlueMarble.user.js');
const sourceFilecss = path.join(__dirname, '../dist/BlueMarble.user.css');
const targetDir = path.join(__dirname, '../install-web');
const targetFilejs = path.join(targetDir, 'BlueMarble.user.js');
const targetFilecss = path.join(targetDir, 'BlueMarble.user.css');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}
// 复制文件
fs.copyFileSync(sourceFilejs, targetFilejs);
fs.copyFileSync(sourceFilecss, targetFilecss);

console.log(`已将 ${sourceFile} 复制到 ${targetFile}`);