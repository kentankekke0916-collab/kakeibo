# 家計管理ツール（PWA）

GitHub Pagesで公開している家計管理アプリ。どれもデータは端末のブラウザ内だけに保存し、サーバーには送らない。

一般版（/kentee/ と /kentee/shindan/）は検索に出す設定でOGP画像（ogp.png）あり。

SHEmoney版（/ と /shindan/）は2026-10-29に公開を終了した。SHEmoney側でGASに設置する流れになったため。今は「公開を終了しました」のページと、以前インストールされた端末のキャッシュを片付ける sw.js だけを置いている。

利用状況はGoatCounterで計測（家計簿は kakeibo-navi、診断は nobishiro-navi）。送るのはページ表示と操作名（ev/original/…）だけで、金額や入力内容は送らない。

| フォルダ | アプリ | 公開URL |
|---|---|---|
| / | （SHEmoney家計簿、公開終了） | — |
| /shindan/ | （伸びしろ診断SHEmoney版、公開終了） | — |
| /kentee/ | 家計簿ケンティー（一般向け） | https://kentankekke0916-collab.github.io/kakeibo/kentee/ |
| /kentee/shindan/ | ケンティーの伸びしろ診断（一般向け） | https://kentankekke0916-collab.github.io/kakeibo/kentee/shindan/ |

- 家計簿の「集計」→「伸びしろ診断に渡す」で、月の集計を端末内（localStorage の kentee-handoff）経由で診断に渡す
- 同じドメインに同居しているので、各 sw.js のキャッシュ名は別々の接頭辞（kentee-kakeibo- / kentee-nobishiro-）にし、上の階層のSWは下のアプリのリクエストに手を出さない
- index.html を更新したら、同じフォルダの sw.js の VERSION を上げる
