<script>
export default {
  data () {
    return {
      isDialog: false,
    }
  },
  props: {
    btnLabel: String,
  },
}
</script>

<template>
<v-dialog v-model="isDialog" max-width="720" :fullscreen="$vuetify.breakpoint.xs">
  <v-btn flat color="blue darken-2" slot="activator">{{ btnLabel }}</v-btn>
  <v-card>
    <v-layout>
      <v-spacer></v-spacer>
      <v-btn icon @click="isDialog = false">
        <v-icon>close</v-icon>
      </v-btn>
    </v-layout>
    <v-card-title primary-title class="layout justify-center pt-0">
      <h2>ACCESS</h2>
    </v-card-title>
    <v-card-text :class="$vuetify.breakpoint.xs ? 'pt-0 pb-3 px-3' : 'pt-0 pb-5 px-5'">
      <h3>本社</h3>
      <div>・東京メトロ千代田線「二重橋前」駅4番出口徒歩2分</div>
      <div>・東京メトロ丸の内線「東京」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</div>
      <div>・東京メトロ各線・都営三田線「大手町」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</div>
      <div>・JR「東京」駅丸の内南口徒歩5分</div>
      <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?ll=35.6804534,139.7625194&q=東京都千代田区丸の内２丁目２−１+岸本ビルヂング&output=embed&t=m&z=17"></iframe>
    </v-card-text>
  </v-card>
</v-dialog>
</template>
