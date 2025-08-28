import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义源文件和目标目录
const sourceFile = path.join(__dirname, '../dist/BlueMarble.user.js');
const targetDir = path.join(__dirname, '../install-web');
const targetFile = path.join(targetDir, 'BlueMarble.user.js');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// 复制文件
fs.copyFileSync(sourceFile, targetFile);

console.log(`已将 ${sourceFile} 复制到 ${targetFile}`);