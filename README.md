# esp-hp
***

## 構成

- [Vue CLI 3](https://cli.vuejs.org/)を使った`SPA（シングルページアプリケーション）`の構成
```
リポジトリTOP
│
├ public ... 静的ファイル、index.htmlを配置
│　├ .htaccess
│　├ favicon.ico
│　├ index.html
│　└ ～
│
├ src ... ソース（この配下を修正）
│　│
│　├ assets ... 画像用フォルダ
│　│　├ ○○.gif
│　│　├ ○○.jpg
│　│　└ ～
│　│
│　├ components ... コンポーネント（ダイアログはここ）
│　│　├ AccessDialog.vue
│　│　└ ～
│　│
│　├ directives ... カスタムディレクティブ
│　│　├ viewport.js
│　│　└ ～
│　│
│　├ mixins ... ミックスイン
│　│　├ dialog-controllable.js
│　│　└ ～
│　│
│　├ pages ... 各ページ（ルーティングで切り替えるパス毎）
│　│　├ Corporate.vue
│　│　└ ～
│　│
│　├ plugin ... プラグイン、共通メソッド
│　│　├ common.js
│　│　└ index.js
│　│
│　├ router ... ルーティング（各ページのパスやタイトルなどを設定）
│　│　└ index.js
│　│
│　├ App.vue ... 画面の共通部分（ナビゲーションメニューなど）
│　└ main.js ... Vueメイン（外部モジュールのインポートなど）
│
├ babel.config.js
├ vue.config.js
├ Dockerfile
└ README.md
```
- マテリアルデザインのFWは[Vuetify.js](https://vuetifyjs.com)を使用

## ビルド
- ビルド環境のDockerイメージは[こちら](https://hub.docker.com/r/espnishikawa/esp-hp-build/)に登録
- ビルド手順は[こちら](https://github.com/esp-nishikawa/esp-hp/wiki/build)を参照

