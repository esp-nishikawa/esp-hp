<script>
import TransitionText from '@/components/TransitionText';
import TransitionChip from '@/components/TransitionChip';

// 業務紹介
export default {
  components: {
    TransitionText,
    TransitionChip,
  },
  data() {
    return {
      activeTab: 0,
      items: [
        {
          type: '社会インフラ1',
          page: 0,
          contents: [
            {
              headline: '大規模施設向けデジタルサイネージシステムの表示品質の向上',
              description: 'すでに稼動済みのシステムに対して、視認性上の問題点を指摘し、改善方法を提案しながら対策を継続しています。'
                + 'モニタに同期する設計に変更することや、効率の見直しでCPU/GPU負荷を1/3にし、かつ、滑らかなアニメーションを実現することができました。'
                + '基本、マイペースで指摘して、マイペースで改善する仕事ができます。',
              techs: ['C++', 'C#', 'java', 'directX', 'XNA', 'dwm'],
            },
            {
              headline: '地方空港の駐機状況管理ソフトウェアの運用、保守',
              description: '運用中に発生したエラーや開発中の不具合残件の改修が主な作業です。'
                + 'エラーの調査、報告書作成、対策／運用対処の提案を行います。'
                + 'プログラムの改修作業はあまりなく、今後はドキュメント作業をメインに行います。',
              techs: ['Java', 'Oracle', 'VC++', 'C#'],
            },
            {
              headline: '地方空港の飛行情報管理処理システムの新システムへの移行作業',
              description: '現在設計段階。'
                + '基本は現行からの流用、一部新規機能あり。'
                + '他システムとの通信部分の設計製造を担当する可能性あり。',
              techs: ['Java', 'Oracle', 'bash', 'bat', 'ps', 'C++', 'C#'],
            },
            {
              headline: 'Ether over Etherに対応したルータの開発',
              description: 'Virtual LAN技術の一種であるEther over Etherに対応したルータを開発しています。'
                + 'EoEはまだ一般的に普及しているものでは無く、参考文献が限られているため、'
                + 'trial and errorで作業しています。',
              techs: ['linux kernel', 'VLAN', 'Ether over Ether', 'C'],
            },
            {
              headline: 'Web明細システムの開発',
              description: 'Web上で通話の明細を確認したりダウンロードを行うシステムの開発を行います。'
                + '要件定義、不具合の改修、機能追加など複数のチームに分かれて開発しています。'
                + '開発担当者は基本プログラミングだけに集中できる環境で、短期間で効率的に品質を上げることを優先します。',
              techs: ['Java', 'JavaScript', 'PostgreSQL', 'Liferay'],
            },
          ],
        },
        {
          type: '社会インフラ2',
          page: 0,
          contents: [
            {
              headline: 'ICカードの利用情報管理用サーバのシステム切替作業',
              description: '既に開発作業は完了しており、現在はサーバ設置場所と管理拠点で連携して'
                + '古いサーバから新しいサーバへの本体交換と管理対象の切替作業を行っています。'
                + '夜間の限られた時間内に作業を行うのですが、'
                + '駅業務に影響が出てしまうとお客様のみならずエンドユーザまで多大な迷惑をかけてしまうので、'
                + 'ミスや遅延は許されません。その為、有識者のみでチームを結成しています。',
              techs: ['C++', 'SQLServer', 'WindowsServer'],
            },
            {
              headline: '新規の交通カードシステムの開発作業',
              description: '新しい交通カードのシステムを運用する為の各種サーバを設計・製造しています。'
                + '既に開発作業は完了しており、現在は製造したサーバ機能の動作検証を行っています。',
              techs: ['C++', 'SQLServer', 'WindowsServer'],
            },
            {
              headline: 'IC出改札システムの開発、運用保守',
              description: '携帯、スマートフォンを利用したIC出改札システムの開発、運用保守を行っています。'
                + '外部サーバとTCP/IPを使用したソケット通信を行う機能、'
                + '汎用的にテーブルデータを更新する仕組み、'
                + 'またコールセンターのような後方業務の画面やエンドユーザーが使用する画面まで、'
                + '幅広い領域を担当しています。',
              techs: ['C#', 'C++', 'ASP.NET', 'SQLServer', 'JP1'],
            },
            {
              headline: 'IC乗車カードシステムの開発',
              description: '携帯電話を利用したIC乗車カードシステム内の、サーバ内通信と上位サーバ間通信部分を担当しています。'
                + 'その他に、業務の一部も担当しており、ユーザからの要望に応え、利便性の向上を図るため、'
                + 'UI変更や新規機能追加などを行っています。'
                + '数千万人が利用する交通インフラの一翼を担うシステムのため、品質に関しては厳しいですが、'
                + '反面、無理のないスケジュールが組まれているため、マイペースで仕事が出来る環境です。',
              techs: ['C++', 'C#', 'SQLServer'],
            },
          ],
        },
        {
          type: 'エンタメシステム',
          page: 0,
          contents: [
            {
              headline: '現行及び次世代ゲーム機のプラットフォームの開発',
              description: 'ゲームライセンシ向けのネットワーク系ライブラリの開発、'
                + '及びネットワーク系ライブラリのテスト環境の構築等のメンテナンスが主な業務になります。'
                + '時折、各種プラットフォームで上がってくるネットワーク以外の障害調査／再現テスト、'
                + 'ゲームライセンシ向けのサンプルプログラムの開発なども行っております。',
              techs: ['C', 'C++', 'C#', 'C++CLI', 'Python', 'Lua', 'PHP', 'VBA', 'Openssl'],
            },
            {
              headline: '大手ECサイトWebサービスの開発',
              description: 'エンタメ系の大手ECサイトの開発を行います。'
                + 'スマホアプリの改修や他社サービスとの連携など大きな機能追加を予定しているため、'
                + 'それに向けた開発を進めています。',
              techs: ['Java', 'JavaScript', 'PHP', 'MySQL', 'AWS', 'Redis', 'Spring Boot', 'MyBatis'],
            },
          ],
        },
        {
          type: '物販/物流システム',
          page: 0,
          contents: [
            {
              headline: 'ECサイトの保守・開発',
              description: '運用中に発生した不具合の対応・DBへのデータパッチ・客先問合せの調査をしつつ案件の開発を行う。'
                + '保守のリリースは緊急度の高いものは対応後即リリース'
                + '緊急度の高くないものに関しては案件に混ぜ込んでリリースするのが一般的。'
                + 'プロジェクト内で中心的な人物になれば案件の見積もり、客先との打ち合わせに参加し、自分の意見を発言することができる。',
              techs: ['Java', 'BATOOL', 'oracle', 'JavaScript', 'NeoSarf', 'postgres'],
            },
            {
              headline: '量販店様向け本部・店舗統合パッケージ',
              description: '量販店様向け本部・店舗統合パッケージを、食品スーパーマーケット様向けに'
                + '発注処理/仕入処理/売上処理などの機能を搭載した基幹業務のカスタマイズ・アドオン対応をしています。',
              techs: ['Java', 'SQL Server', 'NeoSarf', 'sde for batch'],
            },
            {
              headline: '製薬業向け管理会計システム',
              description: 'Web画面を利用した会計システムの画面構成及びDB取込み作業を担当。'
                + 'スケジュールはある程度組まれているが、無理なスケジュールではないため、'
                + 'マイペースで仕事が出来る環境です。',
              techs: ['Oracle', 'PL/SQL', 'BIEE'],
            },
            {
              headline: '広告管理システムの開発',
              description: 'Web広告を管理するシステムを開発しており、画面およびサーバ処理の製造を幅広く担当しています。'
                + '無駄なドキュメントはなるべく作らず、できるだけわかりやすいソースコードでモデルを表現しようとするため、'
                + '効率よく高品質なシステムの開発を行うことができる環境です。',
              techs: ['Java', 'TypeScript', 'Vue.js', 'Almin.js', 'Pug', 'MySQL', 'Redis', 'Spring Boot'],
            },
          ],
        },
      ],
    };
  },
  computed: {
    verticalTabs() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    activePage: {
      get() {
        return this.items[this.activeTab].page;
      },
      set(val) {
        this.items[this.activeTab].page = val;
      },
    },
    activeContents() {
      return this.items[this.activeTab].contents;
    },
    headlineStyle() {
      switch (this.$vuetify.breakpoint.name) {
      case 'xs':
      case 'sm':
        return {
          height: '36px',
          'font-size': '18px',
          'font-weight': '500',
          'line-height': '1',
          'letter-spacing': '0.02em',
        };
      default:
        return {
          height: '20px',
          'font-size': '20px',
          'font-weight': '500',
          'line-height': '1',
          'letter-spacing': '0.02em',
        };
      }
    },
    descriptionStyle() {
      switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return {
          height: '200px',
          'font-size': '13px',
          'font-weight': '400',
        };
      case 'sm':
        return {
          height: '132px',
          'font-size': '13px',
          'font-weight': '400',
        };
      default:
        return {
          height: '120px',
          'font-size': '14px',
          'font-weight': '400',
        };
      }
    },
    techsStyle() {
      return this.verticalTabs
        ? { height: '120px' }
        : { height: '80px' };
    },
  },
  methods: {
    prevPage(cycle) {
      if (this.activePage - 1 < 0) {
        if (cycle) {
          this.activePage = this.activeContents.length - 1;
        }
      } else {
        this.activePage = this.activePage - 1;
      }
    },
    nextPage(cycle) {
      if (this.activePage + 1 >= this.activeContents.length) {
        if (cycle) {
          this.activePage = 0;
        }
      } else {
        this.activePage = this.activePage + 1;
      }
    },
  },
};
</script>

<template>
  <v-tabs
    v-model="activeTab"
    color="transparent"
    slider-color="amber lighten-3"
    dark
    show-arrows
  >
    <v-tab v-for="(item, i) in items" :key="i" ripple>{{ item.type }}</v-tab>
    <v-tabs-items
      :touch="{
        left: () => nextPage(false),
        right: () => prevPage(false),
      }"
    >
      <v-tab-item v-for="(item, i) in items" :key="i">
        <v-layout row align-center>
          <v-flex v-if="verticalTabs" xs1>
            <v-btn icon class="prev-btn" @click="prevPage(true)">
              <v-icon x-large>keyboard_arrow_up</v-icon>
            </v-btn>
            <v-item-group
              v-model="item.page"
              mandatory
              style="width:60px;"
            >
              <v-layout column align-center>
                <v-item v-for="c in item.contents.length" :key="c">
                  <div slot-scope="{ active, toggle }">
                    <v-btn icon :input-value="active" @click="toggle">
                      <v-icon>fiber_manual_record</v-icon>
                    </v-btn>
                  </div>
                </v-item>
              </v-layout>
            </v-item-group>
            <v-btn icon class="next-btn" @click="nextPage(true)">
              <v-icon x-large>keyboard_arrow_down</v-icon>
            </v-btn>
            <div class="page-info">{{ item.page + 1 }} / {{ item.contents.length }}</div>
          </v-flex>
          <v-flex>
            <v-card light flat style="overflow:hidden;">
              <v-card-title primary-title>
                <transition-text
                  :value="item.contents[item.page].headline"
                  :split="verticalTabs"
                  :page="item.page"
                  :style="headlineStyle"
                />
              </v-card-title>
              <v-divider/>
              <v-card-text>
                <transition-text
                  :value="item.contents[item.page].description"
                  :split="verticalTabs"
                  :page="item.page"
                  :style="descriptionStyle"
                />
              </v-card-text>
              <v-subheader>関連技術</v-subheader>
              <transition-chip
                :values="item.contents[item.page].techs"
                :style="techsStyle"
              />
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout v-if="!verticalTabs" row justify-center class="pb-2">
          <v-pagination
            :value="item.page+1"
            @input="item.page=$event-1"
            :length="item.contents.length"
            :total-visible="5"
            circle
          />
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<style scoped>
.prev-btn {
  position: absolute;
  top: 16px;
  left: 4px;
  z-index: 100;
  color: rgba(0,0,0,.54);
}

.next-btn {
  position: absolute;
  bottom: 16px;
  left: 4px;
  z-index: 100;
  color: rgba(0,0,0,.54);
}

.page-info {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: .1em;
  color: rgba(0,0,0,.54);
}

.v-tabs >>> .v-tabs__bar {
  background: linear-gradient(to bottom, rgba(30,136,229,.7), rgba(30,136,229,.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,.9);
}

.v-tabs >>> .v-tabs__div {
  font-size: 15px!important;
  font-weight: 500!important;
  max-width: 160px!important;
}
</style>
