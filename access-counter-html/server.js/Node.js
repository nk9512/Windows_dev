const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// 静的ファイルの提供
app.use(express.static('public'));

// カウントを読み込み（ファイルがなければ0から始める）
let counter = 0;
if (fs.existsSync('counter.txt')) {
  counter = parseInt(fs.readFileSync('counter.txt', 'utf8'));
}

// カウントを取得するAPIエンドポイント
app.get('/counter', (req, res) => {
  counter++;  // カウントを増加
  fs.writeFileSync('counter.txt', counter.toString());  // ファイルにカウントを保存
  res.json({ count: counter });  // JSON形式でカウントを返す
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
