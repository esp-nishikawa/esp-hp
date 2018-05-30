HP確認用
====

* 確認用URL（Forkした場合は`esp-nishikawa`部分が自分のユーザ名になる）<br>
https://esp-nishikawa.github.io/esp-hp/
* ここでは「.htaccess」が効かないのでリロードすると404になります
* GitHub Pagesで表示するためにベースURLを指定しているので必要に応じて書き換えが必要（最終的には削除）
```
index.html
<base href="https://esp-nishikawa.github.io/esp-hp/">
```
* 正規URLを指定しているのでForkしても以下は消さないでください
```
index.html
<link rel="canonical" href="http://esoftpowers.com/">
```
* マテリアルデザインのFWは以下を使用（FWは色々あるけど個人的にvue.jsができるので）<br>
https://vuetifyjs.com
