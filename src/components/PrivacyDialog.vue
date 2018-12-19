<script>
import DialogControllable from '@/mixins/dialog-controllable.js';

export default {
  mixins: [
    DialogControllable,
  ],
  data () {
    return {
      name: 'privacy-dialog',
    }
  },
}
</script>

<template>
<v-dialog v-model="showDialog" ref="dialog" max-width="600" :fullscreen="$vuetify.breakpoint.smAndDown">
  <template slot="activator">
    <slot></slot>
  </template>
  <v-card>
    <v-layout v-if="$vuetify.breakpoint.smAndDown" justify-start>
      <v-btn icon @click="close">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-layout>
    <v-layout v-else justify-end>
      <v-btn icon @click="close">
        <v-icon>close</v-icon>
      </v-btn>
    </v-layout>
    <v-card-title primary-title class="layout justify-center py-0">
      <h2>PRIVACY POLICY</h2>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
        <v-layout row wrap>
          <v-flex xs12>
            <h3>個人情報保護方針</h3>
            <div>株式会社イーソフトパワーズ（以下「当社」といいます）は、お客様からお預かりした個人情報（特定の個人を識別することが可能な情報をいいます）の取り扱いについて、以下のとおり個人情報保護方針を定めその保護に努めます。</div>
            <h3>個人情報の取得</h3>
            <div>個人情報をご提供いただく場合、ご本人に利用目的をできる限り特定し、その目的達成に必要な限度において適法かつ公正な手段を用います。</div>
            <h3>個人情報の利用</h3>
            <div>ご提供いただいた個人情報は、特定した利用目的の達成に必要な範囲内のみで利用いたします。また、目的外利用しないための措置を講じます。</div>
            <h3>第三者への提供</h3>
            <div>ご本人の同意を得ている場合や法令に基づく場合等を除き、第三者に個人情報を提供することはありません。</div>
            <h3>安全管理措置</h3>
            <div>当社は、個人情報をその利用目的の達成に必要な範囲内において正確かつ最新の内容に保つよう努めるとともに、個人情報の漏洩・減失・毀損の防止及び是正に努めます。</div>
            <h3>個人情報の開示、訂正、削除等</h3>
            <div>お客様がご本人の個人情報の開示、訂正、削除等をご希望される場合には、ご本人であることを確認の上、対応させていただきます。</div>
            <h3>法令、規範の遵守と見直し</h3>
            <div>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</div>
            <h3>お問い合わせ</h3>
            <div>当社の個人情報の取り扱いに関するお問い合わせは下記までご連絡ください。</div>
            <div>株式会社イーソフトパワーズ</div>
            <div>〒100-0005 東京都千代田区丸の内2-2-1 岸本ビルヂング６Ｆ</div>
            <div>TEL:03-6273-4837</div>
            <div>FAX:03-6273-4838</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions v-if="$vuetify.breakpoint.smAndDown">
      <v-spacer></v-spacer>
      <v-btn flat round color="primary" @click="close">BACK</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>
