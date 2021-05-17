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
          type: '社会インフラ',
          page: 0,
          contents: [
            {
              headline: 'IC出改札システムの開発、運用保守',
              description: '携帯、スマートフォンを利用したIC出改札システムの開発、運用保守を行っています。'
                + '外部サーバとTCP/IPを使用したソケット通信を行う機能、'
                + '汎用的にテーブルデータを更新する仕組み、'
                + 'またコールセンターのような後方業務の画面やエンドユーザーが使用する画面まで、'
                + '幅広い領域を担当しています。',
              techs: ['C#', 'C++', 'ASP.NET', 'SQL Server', 'JP1'],
            },
            {
              headline: '大規模施設向けデジタルサイネージシステムの表示品質の向上',
              description: 'すでに稼動済みのシステムに対して、視認性上の問題点を指摘し、改善方法を提案しながら対策を継続しています。'
                + 'モニタに同期する設計に変更することや、効率の見直しでCPU/GPU負荷を1/3にし、かつ、滑らかなアニメーションを実現することができました。'
                + '基本、マイペースで指摘して、マイペースで改善する仕事ができます。',
              techs: ['C++', 'C#', 'Java', 'directX', 'XNA', 'dwm'],
            },
            {
              headline: '地方空港の飛行情報管理処理システムの新システムへの移行作業',
              description: '現行のソフトウェアを次期システムに搭載するための改修を行います。'
                + '基本は現行からの流用ですが、一部新規機能があります。'
                + '他システムとの通信部分の設計製造を主に担当しています。',
              techs: ['Java', 'Bash', 'PowerShell', 'C++', 'C#', 'JSP', 'Oracle', 'Spring'],
            },
            {
              headline: 'ICカードの利用情報管理用サーバのシステム切替作業',
              description: '既に開発作業は完了しており、現在はサーバ設置場所と管理拠点で連携して'
                + '古いサーバから新しいサーバへの本体交換と管理対象の切替作業を行っています。'
                + '夜間の限られた時間内に作業を行うのですが、'
                + '駅業務に影響が出てしまうとお客様のみならずエンドユーザまで多大な迷惑をかけてしまうので、'
                + 'ミスや遅延は許されません。その為、有識者のみでチームを結成しています。',
              techs: ['C++', 'SQL Server'],
            },
            {
              headline: 'IC乗車カードシステムの開発',
              description: 'IC乗車カードシステム内の、サーバ内通信と上位サーバ間通信部分の開発を担当しています。'
                + 'その他に、ユーザからの要望に応え、利便性の向上を図るため、UI変更や新規機能追加などを行っています。'
                + '数千万人が利用する交通インフラの一翼を担うシステムのため、品質に関しては厳しいですが、'
                + '反面、無理のないスケジュールが組まれているため、マイペースで仕事が出来る環境です。',
              techs: ['C++', 'C#', 'ASP.NET', 'SQL Server', 'VBA'],
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
                + 'スマホアプリの開発や他社サービスとの連携など長期に渡って様々な機能追加を予定しているため、'
                + 'それに向けた開発を進めています。'
                + '開発規模は大きいですが、その分チームや人の数も多く個々の作業量はあまり多くありません。',
              techs: ['Java', 'JavaScript', 'Kotlin', 'Swift', 'PHP', 'MySQL', 'MyBatis', 'Spring Boot'],
            },
          ],
        },
        {
          type: '物販/物流システム',
          page: 0,
          contents: [
            {
              headline: 'ショッピングサイトWebサービスの開発',
              description: '某ショッピングサイトのサービス機能の開発を行っています。'
                + 'サービス追加をいくつか予定しており、優先度の高い企画から順番に進めています。'
                + 'スピード感を重視しており、スクラム開発を行っています。',
              techs: ['Java', 'JavaScript', 'MySQL', 'Spring Boot', 'Screwdriver', 'PlantUML', 'OpenAPI'],
            },
            {
              headline: '量販店様向け本部・店舗統合パッケージ',
              description: '量販店様向け本部・店舗統合パッケージを、食品スーパーマーケット様向けに'
                + '発注処理/仕入処理/売上処理などの機能を搭載した基幹業務のカスタマイズ・アドオン対応をしています。',
              techs: ['Java', 'SQL Server', 'NeoSarf', 'sde for batch'],
            },
            {
              headline: 'ECサイトの保守・開発',
              description: '運用中に発生した不具合の対応・DBへのデータパッチ・客先問合せの調査をしつつ案件の開発を行います。'
                + '保守のリリースは緊急度の高いものは対応後即リリース、'
                + '緊急度の高くないものに関しては案件に混ぜ込んでリリースするのが一般的です。'
                + 'プロジェクト内で中心的な人物になれば案件の見積もり、客先との打ち合わせに参加し、自分の意見を発言することができます。',
              techs: ['Java', 'BATOOL', 'Oracle', 'JavaScript', 'NeoSarf', 'PostgreSQL'],
            },
            {
              headline: '製薬業向け管理会計システム',
              description: 'Web画面を利用した会計システムの画面構成及びDB取込み作業を担当しています。'
                + 'スケジュールはある程度組まれているが、無理なスケジュールではないため、'
                + 'マイペースで仕事が出来る環境です。',
              techs: ['Oracle', 'PL/SQL', 'BIEE'],
            },
          ],
        },
        {
          type: '広告/通信システム',
          page: 0,
          contents: [
            {
              headline: 'Web明細システムの開発',
              description: 'Web上で通話の明細を確認したりダウンロードを行うシステムの開発を行います。'
                + '要件定義、不具合の改修、機能追加など複数のチームに分かれて開発しています。'
                + '開発担当者は基本プログラミングだけに集中できる環境で、短期間で効率的に品質を上げることを優先します。',
              techs: ['Java', 'JavaScript', 'jQuery', 'Bootstrap', 'Liferay', 'PostgreSQL', 'MyBatis'],
            },
            {
              headline: '広告管理システムの開発',
              description: 'Web広告を管理するシステムを開発しており、画面およびサーバ処理の製造を幅広く担当しています。'
                + '無駄なドキュメントはなるべく作らず、できるだけわかりやすいソースコードでモデルを表現しようとするため、'
                + '効率よく高品質なシステムの開発を行うことができる環境です。',
              techs: ['Java', 'TypeScript', 'Vue.js', 'Almin.js', 'Pug', 'Stylus', 'MySQL', 'Spring Boot'],
            },
            {
              headline: 'Ether over Etherに対応したルータの開発',
              description: 'Virtual LAN技術の一種であるEther over Etherに対応したルータを開発しています。'
                + 'EoEはまだ一般的に普及しているものでは無く、参考文献が限られているため、'
                + 'trial and errorで作業しています。',
              techs: ['linux kernel', 'VLAN', 'Ether over Ether', 'C'],
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
      const defaultStyle = {
        height: '20px',
        color: 'rgba(0,0,0,0.87)',
        'font-size': '20px',
        'font-weight': '500',
        'line-height': '1',
        'letter-spacing': '0.02em',
      };
      switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return {
          ...defaultStyle,
          height: '32px',
          'font-size': '16px',
        };
      case 'sm':
        return {
          ...defaultStyle,
          height: '36px',
          'font-size': '18px',
        };
      default:
        return defaultStyle;
      }
    },
    descriptionStyle() {
      const defaultStyle = {
        height: '120px',
        color: 'rgba(0,0,0,0.87)',
        'font-size': '14px',
        'font-weight': '400',
        'line-height': '1.75',
        'letter-spacing': '0.02em',
      };
      switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return {
          ...defaultStyle,
          height: '152px',
          'font-size': '13px',
          'line-height': '1.5',
        };
      case 'sm':
        return {
          ...defaultStyle,
          height: '132px',
          'font-size': '13px',
        };
      default:
        return defaultStyle;
      }
    },
    techsStyle() {
      return this.verticalTabs
        ? { height: '100px' }
        : { height: '88px' };
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
  <v-sheet class="overflow-hidden">
    <v-tabs
      v-model="activeTab"
      background-color="transparent"
      slider-color="amber lighten-3"
      dark
      show-arrows
    >
      <v-tab v-for="(item, i) in items" :key="i">{{ item.type }}</v-tab>
    </v-tabs>
    <v-tabs-items
      v-model="activeTab"
      :touch="{
        left: () => nextPage(false),
        right: () => prevPage(false),
      }"
    >
      <v-tab-item v-for="(item, i) in items" :key="i">
        <div class="d-flex">
          <div
            v-if="verticalTabs"
            class="align-self-stretch pa-3"
            style="flex: 0 0 64px; max-width: 64px;"
          >
            <div class="d-flex flex-column align-center justify-space-between fill-height">
              <v-btn icon @click="prevPage(true)">
                <v-icon x-large>keyboard_arrow_up</v-icon>
              </v-btn>
              <v-item-group
                v-model="item.page"
                mandatory
                class="d-flex flex-column align-center"
              >
                <v-item
                  v-for="c in item.contents.length"
                  :key="c"
                  v-slot:default="{ active, toggle }"
                >
                  <v-btn icon :input-value="active" @click="toggle">
                    <v-icon>fiber_manual_record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
              <v-btn icon @click="nextPage(true)">
                <v-icon x-large>keyboard_arrow_down</v-icon>
              </v-btn>
            </div>
            <div class="page-info">{{ item.page + 1 }} / {{ item.contents.length }}</div>
          </div>
          <v-card light flat class="overflow-hidden">
            <v-card-title>
              <transition-text
                :value="item.contents[item.page].headline"
                :vertical="verticalTabs"
                :split="verticalTabs"
                :page="item.page"
                class="d-flex align-center"
                :style="headlineStyle"
              />
            </v-card-title>
            <v-divider/>
            <v-card-text>
              <transition-text
                :value="item.contents[item.page].description"
                :vertical="verticalTabs"
                :page="item.page"
                :style="descriptionStyle"
              />
            </v-card-text>
            <v-subheader>関連技術</v-subheader>
            <transition-chip
              :values="item.contents[item.page].techs"
              :page="item.page"
              :style="techsStyle"
            />
          </v-card>
        </div>
        <v-pagination
          v-if="!verticalTabs"
          :value="item.page + 1"
          @input="item.page = $event - 1"
          :length="item.contents.length"
          :total-visible="5"
          circle
          class="text-center pb-4"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<style scoped>
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

>>> .v-tabs-bar {
  background: linear-gradient(to bottom, rgba(30,136,229,.7), rgba(30,136,229,.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,.9);
}

>>> .v-tab {
  color: #fff!important;
  font-size: 15px!important;
  font-weight: 500!important;
}
</style>
