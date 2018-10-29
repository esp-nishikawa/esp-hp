<script>
export default {
  data () {
    return {
      activeTab: null,
      items: [
        {
          tab: '社会インフラ1',
          page: 0,
          contents: [
            {
              title: '大規模施設向けデジタルサイネージシステムの表示品質の向上',
              text: `すでに稼動済みのシステムに対して、視認性上の問題点を指摘し、改善方法を提案しながら対策を継続しています。
                     モニタに同期する設計に変更することや、効率の見直しでCPU/GPU負荷を1/3にし、かつ、滑らかなアニメーションを実現することができました。
                     基本、マイペースで指摘して、マイペースで改善する仕事ができます。`,
              techs: ['C++', 'C#', 'java', 'directX', 'XNA', 'dwm'],
            },
            {
              title: '地方空港の駐機状況管理ソフトウェアの運用、保守',
              text: `運用中に発生したエラーや開発中の不具合残件の改修が主な作業です。
                     エラーの調査、報告書作成、対策／運用対処の提案を行います。
                     プログラムの改修作業はあまりなく、今後はドキュメント作業をメインに行います。`,
              techs: ['Java', 'Oracle', 'VC++', 'C#'],
            },
            {
              title: '地方空港の飛行情報管理処理システムの新システムへの移行作業',
              text: `現在設計段階。
                     基本は現行からの流用、一部新規機能あり。
                     他システムとの通信部分の設計製造を担当する可能性あり。`,
              techs: ['Java', 'Oracle', 'bash', 'bat', 'ps', 'C++', 'C#'],
            },
            {
              title: 'Virtual LAN技術の一種であるEther over Etherに対応したルータを開発しています',
              text: `EoEはまだ一般的に普及しているものでは無く、参考文献が限られているため、
                     trial and errorで作業しています。`,
              techs: ['linux kernel', 'VLAN', 'Ether over Ether', 'C'],
            },
            {
              title: 'Web明細システムの開発',
              text: `Web上で通話の明細を確認したりダウンロードを行うシステムの開発を行います。
                     要件定義、不具合の改修、機能追加など複数のチームに分かれて開発しています。
                     開発担当者は基本プログラミングだけに集中できる環境で、短期間で効率的に品質を上げることを優先します。`,
              techs: ['Java', 'JavaScript', 'PostgreSQL', 'Liferay'],
            },
          ]
        },
        {
          tab: '社会インフラ2',
          page: 0,
          contents: [
            {
              title: 'ICカードの利用情報管理用サーバのシステム切替作業',
              text: `既に開発作業は完了しており、現在はサーバ設置場所と管理拠点で連携して
                     古いサーバから新しいサーバへの本体交換と管理対象の切替作業を行っています。
                     夜間の限られた時間内に作業を行うのですが、
                     駅業務に影響が出てしまうとお客様のみならずエンドユーザまで多大な迷惑をかけてしまうので、
                     ミスや遅延は許されません。その為、有識者のみでチームを結成しています。`,
              techs: ['C++', 'SQLServer', 'WindowsServer'],
            },
            {
              title: '新規の交通カードシステムの開発作業',
              text: `新しい交通カードのシステムを運用する為の各種サーバを設計・製造しています。
                     既に開発作業は完了しており、現在は製造したサーバ機能の動作検証を行っています。`,
              techs: ['C++', 'SQLServer', 'WindowsServer'],
            },
            {
              title: '携帯、スマートフォンを利用したIC出改札システムの開発、運用保守',
              text: `外部サーバとTCP/IPを使用したソケット通信を行う機能、
                     汎用的にテーブルデータを更新する仕組み、
                     またコールセンターのような後方業務の画面やエンドユーザーが使用する画面まで、
                     幅広い領域を担当しています。`,
              techs: ['C#', 'C++', 'ASP.NET', 'SQLServer', 'JP1'],
            },
            {
              title: '携帯電話を利用したIC乗車カードシステム内の、サーバ内通信と上位サーバ間通信部分を担当。',
              text: `その他に、業務の一部も担当しており、ユーザからの要望に応え、利便性の向上を図るため、
                     UI変更や新規機能追加などを行っています。
                     数千万人が利用する交通インフラの一翼を担うシステムのため、品質に関しては厳しいですが、
                     反面、無理のないスケジュールが組まれているため、マイペースで仕事が出来る環境です。`,
              techs: ['C++', 'C#', 'SQLServer'],
            },
          ]
        },
        {
          tab: 'エンタメシステム',
          page: 0,
          contents: [
            {
              title: '現行及び次世代ゲーム機のプラットフォームの開発',
              text: `ゲームライセンシ向けのネットワーク系ライブラリの開発、
                     及びネットワーク系ライブラリのテスト環境の構築等のメンテナンスが主な業務になります。
                     時折、各種プラットフォームで上がってくるネットワーク以外の障害調査／再現テスト、
                     ゲームライセンシ向けのサンプルプログラムの開発なども行っております。`,
              techs: ['C', 'C++', 'C#', 'C++CLI', 'Python', 'Lua', 'PHP', 'VBA', 'Apache', 'Openssl', 'Wireshark'],
            },
            {
              title: '大手ECサイトWebサービスの開発',
              text: `エンタメ系の大手ECサイトの開発を行います。
                     スマホアプリの改修や他社サービスとの連携など大きな機能追加を予定しているため、
                     それに向けた開発を進めています。`,
              techs: ['Java', 'JavaScript', 'PHP', 'MySQL', 'AWS', 'Redis', 'Spring Boot', 'MyBatis'],
            },
          ]
        },
        {
          tab: '物販/物流システム',
          page: 0,
          contents: [
            {
              title: 'ECサイトの保守・開発',
              text: `運用中に発生した不具合の対応・DBへのデータパッチ・客先問合せの調査をしつつ案件の開発を行う。
                     保守のリリースは緊急度の高いものは対応後即リリース
                     緊急度の高くないものに関しては案件に混ぜ込んでリリースするのが一般的。
                     プロジェクト内で中心的な人物になれば案件の見積もり、客先との打ち合わせに参加し、自分の意見を発言することができる。`,
              techs: ['Java', 'BATOOL', 'oracle', 'JavaScript', 'NeoSarf', 'postgres'],
            },
            {
              title: '量販店様向け本部・店舗統合パッケージ',
              text: `量販店様向け本部・店舗統合パッケージを、食品スーパーマーケット様向けに
                     発注処理/仕入処理/売上処理などの機能を搭載した基幹業務のカスタマイズ・アドオン対応をしています。`,
              techs: ['Java', 'SQL Server', 'NeoSarf', 'sde for batch'],
            },
            {
              title: '製薬業向け管理会計システム',
              text: `Web画面を利用した会計システムの画面構成及びDB取込み作業を担当。
                     スケジュールはある程度組まれているが、無理なスケジュールではないため、
                     マイペースで仕事が出来る環境です。`,
              techs: ['Oracle', 'PL/SQL', 'BIEE'],
            },
            {
              title: '広告管理システムの開発',
              text: `Web広告を管理するシステムを開発しており、主にフロント側を担当しています。
                     Alminによって、フロント側でもドメイン駆動設計を取り入れた開発をしています。
                     無駄なドキュメントはなるべく作らず、できるだけわかりやすいソースコードでモデルを表現しようとします。`,
              techs: ['Java', 'TypeScript', 'Vue.js', 'Almin.js', 'Pug', 'MySQL', 'Redis', 'Spring Boot'],
            },
          ]
        },
      ],
    }
  },
}
</script>

<template>
<v-content class="bg_main">
  <div class="bg_main3"></div>
  <div class="bg_main4"></div>
  <section>
    <v-container grid-list-md>
      <v-layout row wrap justify-center class="mt-3">
        <v-flex xs12 sm9 md8 lg7 xl6>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>MISSION</h2>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
                <v-layout row wrap class="pt-3">
                  <v-flex xs12>
                    <div>当社は若い会社ですが、経験豊富な精鋭を集め、適材適所に配置する事により、顧客満足度向上、かつ高効率な経営を実現します。</div>
                    <div>技術者不足の中、当社はPGから上流設計者を配置し、Embedded系、Business系を中心に、幅広く対応可能とします。</div>
                    <div>常駐型での対応を始め、継続受注し一括請負を行う事を目指します。</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-layout row wrap justify-center class="mt-3">
        <v-flex xs12 sm4 xl3 :class="{'px-3': $vuetify.breakpoint.mdAndUp}">
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>Business系</h2>
            </v-card-title>
            <v-card-text>
              <div :style="$vuetify.breakpoint.xs ? {} : {'min-height':'130px'}">
                自動車関係、鉄道関係等々、ビジネスアプリケーションの提案から総合試験まで、ワンストップショッピングとしてユーザにはなくてはならない存在となります。
              </div>
              <h3>Key Technology</h3>
              <div>C/S,Web,制御システム開発</div>
              <div>OS: Windows</div>
              <div>言語: VC++, C#, Java, VB, VB.NET</div>
              <div>DB: Oracle, SQLServer</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 xl3 :class="{'px-3': $vuetify.breakpoint.mdAndUp}">
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>Embedded系</h2>
            </v-card-title>
            <v-card-text>
              <div :style="$vuetify.breakpoint.xs ? {} : {'min-height':'130px'}">
                リアルタイム処理、携帯電話、デジタル家電、事務機器の心臓部開発により、現実となりつつあるユビキタス時代に挑戦していきます。
              </div>
              <h3>Key Technology</h3>
              <div>携帯電話、家電、事務機器等の組込システム開発</div>
              <div>OS: Linux, ITRON</div>
              <div>言語: C, C++, C#, Python, Java</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 xl3 :class="{'px-3': $vuetify.breakpoint.mdAndUp}">
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>Web系</h2>
            </v-card-title>
            <v-card-text>
              <div :style="$vuetify.breakpoint.xs ? {} : {'min-height':'130px'}">
                導入のご相談からコンサルティング。継続的な貴社の広告戦略をサポートします。
              </div>
              <h3>Key Technology</h3>
              <div>ECサイト開発、SEO対策、導入コンサル</div>
              <div>OS: Linux</div>
              <div>言語: Java, JavaScript, JSP, PHP</div>
              <div>DB: Oracle, PostgreSQL, MySQL</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-layout row wrap justify-center class="mt-3">
        <v-flex xs12 sm11 md10 lg9 xl8>
          <v-card raised>
            <v-card-title primary-title class="layout justify-center">
              <h2>WORKS</h2>
            </v-card-title>
            <v-card-text>
              <h3>こんなことをしています</h3>
            </v-card-text>
            <v-tabs
              v-model="activeTab"
              color="transparent"
              slider-color="amber lighten-3"
              dark
              show-arrows
            >
              <v-tab
                v-for="(item, i) in items"
                :key="i"
                ripple
              >
                {{ item.tab }}
              </v-tab>
              <v-tabs-items :touchless="true">
                <v-tab-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-layout align-center :column="$vuetify.breakpoint.smAndDown">
                    <v-flex order-md2>
                      <v-window
                        v-model="item.page"
                        :vertical="$vuetify.breakpoint.mdAndUp"
                      >
                        <v-window-item
                          v-for="(content, c) in item.contents"
                          :key="c"
                        >
                          <v-card light flat :height="$vuetify.breakpoint.xs ? 500 : 400">
                            <v-card-title primary-title>
                              <div class="title">{{ content.title }}</div>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                              <div class="body-1">{{ content.text }}</div>
                            </v-card-text>
                            <v-subheader>関連技術</v-subheader>
                            <a
                              v-for="(tech, t) in content.techs"
                              :key="t"
                              :href="'https://www.google.co.jp/search?q=' + encodeURIComponent(tech)"
                              target="_blank"
                            >
                              <v-tooltip bottom>
                                <v-chip slot="activator" color="blue lighten-1" text-color="white">
                                  {{ tech }}
                                </v-chip>
                                <span>{{ tech }}を検索</span>
                              </v-tooltip>
                            </a>
                          </v-card>
                        </v-window-item>
                      </v-window>
                    </v-flex>
                    <v-flex>
                      <v-btn
                        icon
                        style="position:absolute; z-index:101;"
                        :style="$vuetify.breakpoint.mdAndUp ? 'top:16px; left:8px;' : 'bottom:16px; left:8px;'"
                        @click="item.page = item.page - 1 < 0 ? item.contents.length - 1 : item.page - 1"
                      >
                        <v-icon v-if="$vuetify.breakpoint.mdAndUp" x-large class="text-sub">keyboard_arrow_up</v-icon>
                        <v-icon v-else x-large class="text-sub">keyboard_arrow_left</v-icon>
                      </v-btn>
                      <v-item-group
                        v-show="$vuetify.breakpoint.mdAndUp"
                        v-model="item.page"
                        class="shrink ma-2"
                      >
                        <v-layout align-center :column="$vuetify.breakpoint.mdAndUp">
                          <v-item
                            v-for="(content, c) in item.contents"
                            :key="c"
                          >
                            <div slot-scope="{ active, toggle }">
                              <v-btn
                                :input-value="active"
                                icon
                                @click="toggle"
                              >
                                <v-icon>fiber_manual_record</v-icon>
                              </v-btn>
                            </div>
                          </v-item>
                        </v-layout>
                      </v-item-group>
                      <v-btn
                        icon
                        style="position:absolute; z-index:101;"
                        :style="$vuetify.breakpoint.mdAndUp ? 'bottom:16px; left:8px;' : 'bottom:16px; right:8px;'"
                        @click="item.page = item.page + 1 >= item.contents.length ? 0 : item.page + 1"
                      >
                        <v-icon v-if="$vuetify.breakpoint.mdAndUp" x-large class="text-sub">keyboard_arrow_down</v-icon>
                        <v-icon v-else x-large class="text-sub">keyboard_arrow_right</v-icon>
                      </v-btn>
                      <div
                        class="subheading font-weight-bold text-sub"
                        style="position:absolute; z-index:100;"
                        :style="$vuetify.breakpoint.mdAndUp ? 'bottom:16px; right:16px;' : 'bottom:16px'"
                      >
                        {{ item.page + 1 }} / {{ item.contents.length }}
                      </div>
                    </v-flex>
                  </v-layout>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</v-content>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-chip:hover {
  text-decoration: underline;
}
</style>
