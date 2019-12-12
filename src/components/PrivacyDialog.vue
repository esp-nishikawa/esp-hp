<script>
import DialogWrapper from '@/components/DialogWrapper';

// プライバシーポリシーダイアログ
export default {
  components: {
    DialogWrapper,
  },
};
</script>

<template>
  <dialog-wrapper max-width="600">
    <template #activator>
      <slot/>
    </template>
    <template #title>
      <base-headline>PRIVACY POLICY</base-headline>
    </template>
    <template #content>
      <v-container :class="{'pa-0': $vuetify.breakpoint.xs}">
        <v-row>
          <v-col cols="12">
            <base-subheading>個人情報保護方針</base-subheading>
            <base-text>株式会社イーソフトパワーズ（以下「当社」といいます）は、お客様からお預かりした個人情報（特定の個人を識別することが可能な情報をいいます）の取り扱いについて、以下のとおり個人情報保護方針を定めその保護に努めます。</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>個人情報の取得</base-subheading>
            <base-text>個人情報をご提供いただく場合、ご本人に利用目的をできる限り特定し、その目的達成に必要な限度において適法かつ公正な手段を用います。</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>個人情報の利用</base-subheading>
            <base-text>ご提供いただいた個人情報は、特定した利用目的の達成に必要な範囲内のみで利用いたします。また、目的外利用しないための措置を講じます。</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>第三者への提供</base-subheading>
            <base-text>ご本人の同意を得ている場合や法令に基づく場合等を除き、第三者に個人情報を提供することはありません。</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>安全管理措置</base-subheading>
            <base-text>当社は、個人情報をその利用目的の達成に必要な範囲内において正確かつ最新の内容に保つよう努めるとともに、個人情報の漏洩・減失・毀損の防止及び是正に努めます。</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>個人情報の開示、訂正、削除等</base-subheading>
            <base-text>お客様がご本人の個人情報の開示、訂正、削除等をご希望される場合には、ご本人であることを確認の上、対応させていただきます。</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>法令、規範の遵守と見直し</base-subheading>
            <base-text>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>お問い合わせ</base-subheading>
            <base-text>当社の個人情報の取り扱いに関するお問い合わせは下記までご連絡ください。</base-text>
            <base-text>株式会社イーソフトパワーズ</base-text>
            <base-text>〒100-0005 東京都千代田区丸の内2-2-1 岸本ビルヂング６Ｆ</base-text>
            <base-text>TEL:03-6273-4837</base-text>
            <base-text>FAX:03-6273-4838</base-text>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </dialog-wrapper>
</template>
