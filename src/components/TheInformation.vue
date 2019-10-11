<script>
// お知らせ情報
export default {
  data() {
    return {
      informations: [
        {
          date: '2019-10-10',
          headline: 'サイト更新 決算状況、採用情報など更新しました。',
          description: `・２０２０年度新卒採用情報を掲載しました。<br>
                        ・その他、決算状況など更新しました。`,
        },
        {
          date: '2018-11-20',
          headline: 'サイト更新 メールフォームを設置しました。',
          description: `ページ下部「お問い合わせ」のボタンより、お気軽にお問い合わせください。`,
        },
        {
          date: '2018-9-18',
          headline: 'サイト更新 オフィス画像を掲載しました。',
          description: `オフィス環境ページは<a href='http://esoftpowers.com/corporate#office'>こちら</a>`,
        },
        {
          date: '2018-7-12',
          headline: 'サイトリニューアルしました。',
          description: `・２０１９年度新卒採用情報を掲載しました。<br>
                        ・中途採用情報を更新しました。<br>
                        ・その他、決算状況など更新しました。`,
        },
        {
          date: '2015-10-25',
          headline: '祝！本社移転。住所や案内など更新しました。',
          description: `＜新本社＞<div>〒100-0005<br>東京都千代田区丸の内2-2-1<br>岸本ビルヂング６Ｆ</div>`,
        },
        {
          date: '2015-2-1',
          headline: 'サイト更新 決算状況など変更しました。',
          description: ``,
        },
      ],
    };
  },
};
</script>

<template>
  <v-card flat class="transparent">
    <v-card-title primary-title>
      <v-icon medium color="blue lighten-2" class="information-icon mr-2">thumb_up</v-icon>
      <div class="information-title">Information</div>
    </v-card-title>
    <v-divider/>
    <v-expansion-panel popout>
      <v-expansion-panel-content
        v-for="(information, i) in informations"
        :key="i"
        :hide-actions="!information.description"
      >
        <div slot="header">
          <div class="information-date">{{ information.date }}</div>
          <div>{{ information.headline }}</div>
        </div>
        <v-card v-if="information.description">
          <v-card-text class="pl-4" v-html="information.description"/>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<style scoped>
.information-icon {
  animation: bounce 3s ease infinite;
}

@keyframes bounce {
  60% { transform: translateY(0px); }
  70% { transform: translateY(-10px); }
  75% { transform: translateY(0px); }
  80% { transform: translateY(-5px); }
  90% { transform: translateY(0px); }
}

.information-title {
  position: relative;
  overflow: hidden;
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0em;
}

.information-title:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 40px;
  background: rgba(250,250,250,.5);
  transform-origin: bottom left;
  transform: rotate(-45deg) translateY(-40px);
  animation: shine 3s ease infinite;
}

@keyframes shine {
  80% { transform: rotate(-45deg) translateY(-40px); }
  100% { transform: rotate(-45deg) translateY(160px); }
}

.information-date {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0em;
  color: rgba(0,0,0,.54);
}
</style>
