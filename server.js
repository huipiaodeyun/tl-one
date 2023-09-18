const express = require('express');
const app = express();
const path = require('path');

// 设置静态文件目录
app.use(express.static(path.join(__dirname)));

// 设置 CSS 和 JavaScript 文件的 MIME 类型
app.use('/styles.css', express.static(path.join(__dirname, 'styles.css')));
app.use('/script.js', express.static(path.join(__dirname, 'script.js')));

// 启动本地服务器并监听 3000 端口
app.listen(3000, () => {
  console.log('服务器已启动，正在监听端口 3000...');
});