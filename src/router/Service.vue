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
      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="9" md="8" lg="7" xl="6">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">MISSION</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row class="mt-2">
                    <v-col>
                      <base-text>当社は若い会社ですが、経験豊富な精鋭を集め、適材適所に配置する事により、顧客満足度向上、かつ高効率な経営を実現します。</base-text>
                      <base-text>技術者不足の中、当社はPGから上流設計者を配置し、Embedded系、Business系を中心に、幅広く対応可能とします。</base-text>
                      <base-text>常駐型での対応を始め、継続受注し一括請負を行う事を目指します。</base-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="8" md="4" xl="3">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">Business系</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row class="mt-2" :style="$vuetify.breakpoint.mdAndUp ? {'min-height': '128px'} : {}">
                    <v-col>
                      <base-text>自動車関係、鉄道関係等々、ビジネスアプリケーションの提案から総合試験まで、ワンストップショッピングとしてユーザにはなくてはならない存在となります。</base-text>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <base-subheading>Key Technology</base-subheading>
                      <base-text>C/S、Web、制御システム開発</base-text>
                      <base-text>OS: Windows Server, UNIX</base-text>
                      <base-text>言語: VC++, C#, Java, JSP, VB.NET</base-text>
                      <base-text>DB: Oracle, SQLServer</base-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8" md="4" xl="3">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">Embedded系</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row class="mt-2" :style="$vuetify.breakpoint.mdAndUp ? {'min-height': '128px'} : {}">
                    <v-col>
                      <base-text>リアルタイム処理、携帯電話、デジタル家電、事務機器の心臓部開発により、現実となりつつあるユビキタス時代に挑戦していきます。</base-text>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <base-subheading>Key Technology</base-subheading>
                      <base-text>携帯電話、家電、事務機器等の組込システム開発</base-text>
                      <base-text>OS: Linux, ITRON</base-text>
                      <base-text>言語: C, C++, C#, Python, Java</base-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8" md="4" xl="3">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">Web系</base-headline>
              </v-card-title>
              <v-card-text>
                <v-container class="px-0 px-sm-3">
                  <v-row class="mt-2" :style="$vuetify.breakpoint.mdAndUp ? {'min-height': '128px'} : {}">
                    <v-col>
                      <base-text>導入のご相談からコンサルティング。継続的な貴社の広告戦略をサポートします。</base-text>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <base-subheading>Key Technology</base-subheading>
                      <base-text>ECサイト開発、SEO対策、導入コンサル</base-text>
                      <base-text>OS: Linux, AWS, Docker</base-text>
                      <base-text>言語: Java, JavaScript, PHP</base-text>
                      <base-text>DB: Oracle, PostgreSQL, MySQL</base-text>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" sm="11" md="10" lg="9" xl="8">
            <v-card raised>
              <v-card-title class="justify-center">
                <base-headline class="pt-10 pb-2">WORKS</base-headline>
              </v-card-title>
              <v-card-text class="pb-0">
                <v-container class="px-0 px-sm-3">
                  <v-row>
                    <v-col>
                      <base-subheading>こんなことをしています</base-subheading>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <the-introduction/>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </page-wrapper>
</template>
