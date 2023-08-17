const fs = require('fs');
const path = require('path');
const regStyle = /<style>[\s\S]*<\/style>/;

const filePath = path.join(__dirname, 'button.html');

fs.readFile(filePath, 'utf8', function(err, dataStr) {
    if (err) {
        console.log('读取失败' + err.message);
    } else {
        resolve(dataStr);
    }
});

function resolve(htmlStr) {
    const r1 = regStyle.exec(htmlStr);
    if (r1 && r1[0]) { 
        const newCss = r1[0].replace('<style>', '').replace('</style>', '');
        fs.writeFile(path.join(__dirname, 'fs', 'style.css'), newCss, 'utf8', function(err) {
            if (err) {
                console.log('写入失败' + err.message);
            } else {
                console.log('写入成功');
            }
        });
    } else {
        console.log('未找到样式内容');
    }
}
