# 家計管理ツール（PWA）

GitHub Pagesで公開している4つのアプリ。どれもデータは端末のブラウザ内だけに保存し、サーバーには送らない。

一般版（/kentee/ と /kentee/shindan/）は検索に出す設定でOGP画像（ogp.png）あり。SHEmoney版はnoindex。

利用状況はGoatCounterで計測（家計簿は kakeibo-navi、診断は nobishiro-navi）。送るのはページ表示と操作名（ev/original/… または ev/shemoney/…）だけで、金額や入力内容は送らない。

| フォルダ | アプリ | 公開URL |
|---|---|---|
| / | SHEmoney家計簿 | https://kentankekke0916-collab.github.io/kakeibo/ |
| /shindan/ | 家計の伸びしろ診断（SHEmoney版） | https://kentankekke0916-collab.github.io/kakeibo/shindan/ |
| /kentee/ | 家計簿ケンティー（一般向け） | https://kentankekke0916-collab.github.io/kakeibo/kentee/ |
| /kentee/shindan/ | ケンティーの伸びしろ診断（一般向け） | https://kentankekke0916-collab.github.io/kakeibo/kentee/shindan/ |

- 家計簿の「集計」→「伸びしろ診断に渡す」で、月の集計を端末内（localStorage の she-handoff / kentee-handoff）経由で診断に渡す
- 同じドメインに同居しているので、各 sw.js のキャッシュ名は別々の接頭辞（kakeibo- / nobishiro- / kentee-kakeibo- / kentee-nobishiro-）にし、上の階層のSWは下のアプリのリクエストに手を出さない
- index.html を更新したら、同じフォルダの sw.js の VERSION を上げる
