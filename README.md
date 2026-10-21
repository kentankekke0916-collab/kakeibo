# SHEmoney家計簿（PWA版）

このフォルダの中身をそのままGitHub Pagesなどの静的ホスティングに置けば、ホーム画面に追加できるアプリとして動く。

- index.html：アプリ本体（Artifactのモックと同じ中身＋Slack共有ボタン、CSVファイル保存）
- manifest.webmanifest：アプリ名・アイコン・全画面起動の設定
- sw.js：オフラインで開くためのキャッシュ。index.html を更新したら VERSION を上げる
- icon-*.png / apple-touch-icon.png：アイコン

家計データは端末のブラウザ内（localStorage）にだけ保存し、サーバーには送らない。
