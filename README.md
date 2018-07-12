# esp-hp
***

## 構成

- [VueCLI](https://jp.vuejs.org/v2/guide/installation.html#CLI)を使った`SPA（シングルページアプリケーション）`の構成
```
リポジトリTOP
│
├ build ... Webpackビルド用フォルダ（さわる必要なし）
│　├ build.js
│　│　～
│　└ webpack.prod.conf.js
│
├ config ... Webpack設定用フォルダ（さわる必要なし）
│　├ dev.env.js
│　├ index.js
│　└ prod.env.js
│
├ dist ... 出力先フォルダ（ビルド後この配下をアップロード）
│　└ .htaccess
│
├ src ... ソース（この配下を修正）
│　│
│　├ assets ... 画像用フォルダ
│　│　├ ○○.gif
│　│　│　～
│　│　└ ○○.jpg
│　│
│　├ components ... 各ページのコンポーネント
│　│　├ Corporate.vue
│　│　├ Home.vue
│　│　├ Recruit.vue
│　│　└ Service.vue
│　│
│　├ router ... ルーティング（各ページのパスやタイトルなど）
│　│　└ index.js
│　│
│　├ App.vue ... 共通部分のコンポーネント（ナビゲーションメニューや全体にかかるスタイルなど）
│　└ main.js ... Vueメイン（外部モジュールのインポートなど）
│
├ Dockerfile
├ index.html
├ package.json
├ package-lock.json
└ README.md
```
- マテリアルデザインのFWは[Vuetify.js](https://vuetifyjs.com)を使用

## ビルド
- ビルド環境のDockerイメージは[こちら](https://hub.docker.com/r/espnishikawa/esp-hp-build/)に登録
- ビルド手順は[こちら](https://github.com/esp-nishikawa/esp-hp/wiki/build)を参照

