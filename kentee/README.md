# 家計簿ケンティー（一般向けPWA）

SHEmoney家計簿（リポジトリ直下）から、SHEmoney固有の要素（名前・オレンジ・伸びしろ診断連携・トレプロ用Slack形式）を外した一般向け版。公開URLは https://kentankekke0916-collab.github.io/kakeibo/kentee/ 。

- データ保存キーは kentee-kakeibo-v1（SHEmoney版と混ざらない）
- sw.js のキャッシュ名は kentee- で始める。直下のSHEmoney版とドメインが同じなので、相手のキャッシュを消さないようにしている
- index.html を更新したら sw.js の VERSION を上げる
