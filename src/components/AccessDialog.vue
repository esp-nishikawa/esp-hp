<script>
import DialogControllable from '@/mixins/dialog-controllable.js';

export default {
  mixins: [
    DialogControllable,
  ],
  props: {
    btnLabel: String,
    btnClass: String,
    btnStyle: { type: String, default: 'min-width:0' },
    btnColor: { type: String, default: 'blue darken-2' },
  },
}
</script>

<template>
<v-dialog v-model="showDialog" max-width="720" :fullscreen="$vuetify.breakpoint.smAndDown">
  <v-btn flat round slot="activator" :class="btnClass" :style="btnStyle" :color="btnColor">{{ btnLabel }}</v-btn>
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
      <h2>ACCESS</h2>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
        <v-layout row wrap>
          <v-flex xs12>
            <h3>本社</h3>
            <div>・東京メトロ千代田線「二重橋前」駅4番出口徒歩2分</div>
            <div>・東京メトロ丸の内線「東京」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</div>
            <div>・東京メトロ各線・都営三田線「大手町」駅から東京メトロ千代田線「二重橋前」駅方面4番出口徒歩2分</div>
            <div>・JR「東京」駅丸の内南口徒歩5分</div>
            <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?ll=35.6804534,139.7625194&q=東京都千代田区丸の内２丁目２−１+岸本ビルヂング&output=embed&t=m&z=17"></iframe>
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
