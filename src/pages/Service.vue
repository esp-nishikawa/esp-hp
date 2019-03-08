<script>
import PageWrapper from '@/components/PageWrapper';
import TheIntroduction from '@/components/TheIntroduction';

// 事業分野ページ
export default {
  components: {
    PageWrapper,
    TheIntroduction,
  },
};
</script>

<template>
  <page-wrapper background="2">
    <section>
      <v-container grid-list-md>
        <v-layout row wrap justify-center class="mt-3">
          <v-flex xs12 sm9 md8 lg7 xl6>
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>MISSION</base-headline>
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
          <v-flex xs12 sm8 md4 xl3 :class="{'pa-3': $vuetify.breakpoint.smAndUp}">
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>Business系</base-headline>
              </v-card-title>
              <v-card-text>
                <div :style="$vuetify.breakpoint.mdAndUp ? {'min-height': '130px'} : {}">
                  自動車関係、鉄道関係等々、ビジネスアプリケーションの提案から総合試験まで、ワンストップショッピングとしてユーザにはなくてはならない存在となります。
                </div>
                <base-subheading>Key Technology</base-subheading>
                <div>C/S,Web,制御システム開発</div>
                <div>OS: Windows</div>
                <div>言語: VC++, C#, Java, VB, VB.NET</div>
                <div>DB: Oracle, SQLServer</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm8 md4 xl3 :class="{'pa-3': $vuetify.breakpoint.smAndUp}">
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>Embedded系</base-headline>
              </v-card-title>
              <v-card-text>
                <div :style="$vuetify.breakpoint.mdAndUp ? {'min-height': '130px'} : {}">
                  リアルタイム処理、携帯電話、デジタル家電、事務機器の心臓部開発により、現実となりつつあるユビキタス時代に挑戦していきます。
                </div>
                <base-subheading>Key Technology</base-subheading>
                <div>携帯電話、家電、事務機器等の組込システム開発</div>
                <div>OS: Linux, ITRON</div>
                <div>言語: C, C++, C#, Python, Java</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm8 md4 xl3 :class="{'pa-3': $vuetify.breakpoint.smAndUp}">
            <v-card raised>
              <v-card-title primary-title class="layout justify-center">
                <base-headline>Web系</base-headline>
              </v-card-title>
              <v-card-text>
                <div :style="$vuetify.breakpoint.mdAndUp ? {'min-height': '130px'} : {}">
                  導入のご相談からコンサルティング。継続的な貴社の広告戦略をサポートします。
                </div>
                <base-subheading>Key Technology</base-subheading>
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
                <base-headline>WORKS</base-headline>
              </v-card-title>
              <v-card-text>
                <base-subheading>こんなことをしています</base-subheading>
              </v-card-text>
              <the-introduction/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </page-wrapper>
</template>
