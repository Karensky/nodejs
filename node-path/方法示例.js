const path = require('path');

// 获取路径的基本文件名（不包含目录部分）
const filename = path.basename('/path/to/file.txt');
console.log(filename); // 输出: file.txt

// 获取路径的目录名
const dirname = path.dirname('/path/to/file.txt');
console.log(dirname); // 输出: /path/to

// 获取路径的扩展名
const extname = path.extname('/path/to/file.txt');
console.log(extname); // 输出: .txt

// 解析路径，得到一个对象，包含目录、文件名、扩展名等信息
const parsedPath = path.parse('/path/to/file.txt');
console.log(parsedPath);
// 输出:
// {
//   root: '/',
//   dir: '/path/to',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// 将路径的各个部分合并为一个路径
const joinedPath = path.join('/path', 'to', 'file.txt');
console.log(joinedPath); // 输出: /path/to/file.txt

// 将路径进行规范化，解析 ".." 和 "." 等
const normalizedPath = path.normalize('/path/./to/../file.txt');
console.log(normalizedPath); // 输出: /path/file.txt

// 将多个路径片段拼接成一个路径，类似 join，但会处理 ".." 和 "." 等
const resolvedPath = path.resolve('/path', 'to', '../file.txt');
console.log(resolvedPath); // 输出: /file.txt

// 判断一个路径是否为绝对路径
const isAbsolute = path.isAbsolute('/path/to/file.txt');
console.log(isAbsolute); // 输出: true
