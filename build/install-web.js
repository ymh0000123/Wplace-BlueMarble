import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义文件配置
const config = {
    sourceDir: path.join(__dirname, '../dist'),
    targetDir: path.join(__dirname, '../install-web'),
    files: [
        { name: 'BlueMarble.user.js', required: true },
        { name: 'BlueMarble.user.css', required: false }
    ]
};

/**
 * 复制文件到目标目录
 * @param {string} sourceFile - 源文件路径
 * @param {string} targetFile - 目标文件路径
 * @param {boolean} required - 是否为必需文件
 */
function copyFile(sourceFile, targetFile, required = true) {
    try {
        // 检查源文件是否存在
        if (!fs.existsSync(sourceFile)) {
            if (required) {
                throw new Error(`必需的源文件不存在: ${sourceFile}`);
            } else {
                console.warn(`⚠️  可选文件不存在，跳过: ${sourceFile}`);
                return false;
            }
        }

        // 复制文件
        fs.copyFileSync(sourceFile, targetFile);
        console.log(`✅ 已成功复制: ${path.basename(sourceFile)}`);
        return true;
    } catch (error) {
        console.error(`❌ 复制文件失败: ${error.message}`);
        if (required) {
            throw error;
        }
        return false;
    }
}

/**
 * 主函数
 */
async function main() {
    try {
        console.log('🚀 开始复制文件到 install-web 目录...\n');

        // 确保目标目录存在
        if (!fs.existsSync(config.targetDir)) {
            fs.mkdirSync(config.targetDir, { recursive: true });
            console.log(`📁 已创建目标目录: ${config.targetDir}\n`);
        }

        let successCount = 0;
        let totalFiles = config.files.length;

        // 复制所有文件
        for (const file of config.files) {
            const sourceFile = path.join(config.sourceDir, file.name);
            const targetFile = path.join(config.targetDir, file.name);
            
            if (copyFile(sourceFile, targetFile, file.required)) {
                successCount++;
            }
        }

        console.log(`\n📊 复制完成: ${successCount}/${totalFiles} 个文件`);
        
        if (successCount === 0) {
            throw new Error('没有文件被成功复制');
        }

    } catch (error) {
        console.error(`\n❌ 操作失败: ${error.message}`);
        process.exit(1);
    }
}

// 运行主函数
main();