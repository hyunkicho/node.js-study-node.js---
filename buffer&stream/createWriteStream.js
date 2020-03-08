const fs = require('fs');

const writeStream = fs.createWriteStream('./write.txt');
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

writeStream.write('첫번째 줄.\n');
writeStream.write('두번째 줄');
writeStream.end();