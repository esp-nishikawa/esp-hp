<script>
import DialogControllable from '@/mixins/dialog-controllable.js';

// 各ダイアログの共通ラッパー
export default {
  mixins: [
    DialogControllable,
  ],
  props: {
    dialogKey: String,
    maxWidth: [String, Number],
  },
  data() {
    return {
      historyName: this.dialogKey,
    };
  },
  computed: {
    fullscreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<template>
  <v-dialog v-model="showDialog" :max-width="maxWidth" :fullscreen="fullscreen">
    <template slot="activator">
      <slot name="activator"/>
    </template>
    <v-card>
      <v-layout v-if="fullscreen" justify-start>
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
        <slot name="title"/>
      </v-card-title>
      <slot name="body">
        <v-card-text>
          <slot name="content"/>
        </v-card-text>
        <v-card-actions v-if="fullscreen">
          <v-spacer/>
          <v-btn flat round color="primary" @click="close">BACK</v-btn>
        </v-card-actions>
      </slot>
    </v-card>
  </v-dialog>
</template>
