// const fs = require('fs');

// fs.readFile('./成绩.json', 'utf8', function (err, dataStr) {
//     if (err) {
//         console.log('读取错误：' + err.message);
//         return;
//     }

//     const jsonStr = JSON.parse(dataStr);
//     console.log(jsonStr);

//     const jsonStringified = JSON.stringify(jsonStr, null, 4); // 使用null和4来格式化JSON字符串
//     fs.writeFile('./成绩表.json', jsonStringified, 'utf8', function (err) {
//         if (err) {
//             console.log('写入失败：' + err.message);
//             return;
//         }
//         console.log('写入成功');
//     });
// });


const fs = require('fs');

fs.readFile('./成绩.json', 'utf8', function (err, dataStr) {
    if (err) {
        console.log('读取错误：' + err.message);
        return;
    }

    const jsonArray = JSON.parse(dataStr);
    console.log(jsonArray);

    let formattedData = '';

    jsonArray.forEach(item => {
        const formattedItem = `${item.name}-${item.age}-${item.grades}\n`;
        formattedData += formattedItem;
    });

    //__dirname路径动态拼接
    fs.writeFile(__dirname + '/成绩表.txt', formattedData, 'utf8', function (err) {
        if (err) {
            console.log('写入失败：' + err.message);
            return;
        }
        console.log('写入成功');
    });
});
