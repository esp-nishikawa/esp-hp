<script>
import DialogWrapper from '@/components/DialogWrapper';

// 交通アクセス・地図ダイアログ
export default {
  components: {
    DialogWrapper,
  },
};
</script>

<template>
  <dialog-wrapper dialog-key="access_dialog" max-width="720">
    <template #activator>
      <slot/>
    </template>
    <template #title>
      <base-headline>ACCESS</base-headline>
    </template>
    <template #content>
      <v-container class="px-0 px-sm-3">
        <v-row>
          <v-col>
            <base-subheading>本社</base-subheading>
            <base-text>
              <ul>
                <li>東京メトロ千代田線「二重橋前」駅4番出口徒歩2分</li>
                <li>東京メトロ丸の内線「東京」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</li>
                <li>東京メトロ各線・都営三田線「大手町」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</li>
                <li>JR「東京」駅丸の内南口徒歩5分</li>
              </ul>
            </base-text>
            <iframe
              width="100%"
              height="450"
              style="border:0;"
              src="https://maps.google.co.jp/maps?ll=35.6804534,139.7625194&q=東京都千代田区丸の内２丁目２−１+岸本ビルヂング&output=embed&t=m&z=17"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </dialog-wrapper>
</template>
