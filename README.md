# esp-hp
***

## 構成

- [VueCLI](https://jp.vuejs.org/v2/guide/installation.html#CLI)を使った`SPA（シングルページアプリケーション）`の構成
```
リポジトリTOP
│
├ dist ... 出力先フォルダ（ビルド後この配下をアップロード）
│　├ .htaccess
│　├ favicon.ico
│　├ robots.txt
│　└ sitemap.xml
│
├ src ... ソース（この配下を修正）
│　│
│　├ assets ... 画像用フォルダ
│　│　├ ○○.gif
│　│　├ ○○.jpg
│　│　└ ～
│　│
│　├ components ... 各ページのコンポーネント
│　│　├ Corporate.vue
│　│　├ Home.vue
│　│　├ Recruit.vue
│　│　├ Service.vue
│　│　└ ～
│　│
│　├ directives ... カスタムディレクティブ
│　│　├ vpshow.js
│　│　└ ～
│　│
│　├ mixins ... ミックスイン
│　│　├ dialog-controllable.js
│　│　└ ～
│　│
│　├ router ... ルーティング（各ページのパスやタイトルなど）
│　│　└ index.js
│　│
│　├ App.vue ... 共通部分のコンポーネント（ナビゲーションメニューや全体にかかるスタイルなど）
│　└ main.js ... Vueメイン（外部モジュールのインポートなど）
│
├ Dockerfile
├ index.html
└ README.md
```
- マテリアルデザインのFWは[Vuetify.js](https://vuetifyjs.com)を使用

## ビルド
- ビルド環境のDockerイメージは[こちら](https://hub.docker.com/r/espnishikawa/esp-hp-build/)に登録
- ビルド手順は[こちら](https://github.com/esp-nishikawa/esp-hp/wiki/build)を参照

