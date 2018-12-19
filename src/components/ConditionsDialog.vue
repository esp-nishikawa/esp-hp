<script>
import DialogControllable from '@/mixins/dialog-controllable.js';

export default {
  mixins: [
    DialogControllable,
  ],
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
      <h2>CONDITIONS & BENEFITS</h2>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
        <v-layout row wrap>
          <v-flex xs12>
            <h3>勤務地</h3>
            <div>東京、東京近郊、札幌、その他プロジェクト拠点</div>
            <h3>勤務時間</h3>
            <div>９：００～１７：３０（昼休み１２：００～１３：００）</div>
            <div>実働７.５時間</div>
            <h3>休日・休暇</h3>
            <div>土曜日、日曜日、祝日、夏期休暇、年末年始休暇、他</div>
            <h3>福利厚生</h3>
            <div>・各種保険：健康保険、厚生年金保険、雇用保険、労災保険等完備</div>
            <div>・健保組合提携の宿泊・スポーツ施設を利用可</div>
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
