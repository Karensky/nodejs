const fs = require('fs');

// 异步地读取文件内容
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件错误:', err);
        return;
    }
    console.log('文件内容:', data);
});

// 异步地写入文件内容
fs.writeFile('newfile.txt', 'Hello, World!', 'utf8', (err) => {
    if (err) {
        console.error('写入文件错误:', err);
        return;
    }
    console.log('写入成功');
});

// 异步地追加文件内容
fs.appendFile('file.txt', ' 追加内容', 'utf8', (err) => {
    if (err) {
        console.error('追加文件错误:', err);
        return;
    }
    console.log('追加成功');
});

// 异步地删除文件
fs.unlink('file.txt', (err) => {
    if (err) {
        console.error('删除文件错误:', err);
        return;
    }
    console.log('文件删除成功');
});

// 异步地创建目录
fs.mkdir('newdir', (err) => {
    if (err) {
        console.error('创建目录错误:', err);
        return;
    }
    console.log('目录创建成功');
});

// 异步地读取目录
fs.readdir('newdir', (err, files) => {
    if (err) {
        console.error('读取目录错误:', err);
        return;
    }
    console.log('目录内容:', files);
});

// 异步地删除目录（只能删除空目录）
fs.rmdir('newdir', (err) => {
    if (err) {
        console.error('删除目录错误:', err);
        return;
    }
    console.log('目录删除成功');
});

// 同步地读取文件内容
try {
    const syncData = fs.readFileSync('file.txt', 'utf8');
    console.log('文件内容（同步）:', syncData);
} catch (err) {
    console.error('同步读取文件错误:', err);
}

// 同步地写入文件内容
try {
    fs.writeFileSync('newfile.txt', 'Hello, World!（同步）', 'utf8');
    console.log('写入成功（同步）');
} catch (err) {
    console.error('同步写入文件错误:', err);
}
