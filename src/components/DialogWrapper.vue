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
  <v-dialog
    v-model="showDialog"
    :max-width="maxWidth"
    :fullscreen="fullscreen"
    scrollable
    eager
  >
    <template v-slot:activator="{ on }">
      <div v-on="on" class="d-inline-block">
        <slot name="activator"/>
      </div>
    </template>
    <v-card>
      <v-card-title class="d-block pt-2 px-2 pb-6 elevation-2" style="z-index:1;">
        <div v-if="fullscreen" class="d-flex justify-start">
          <v-btn icon @click="close">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </div>
        <div v-else class="d-flex justify-end">
          <v-btn icon @click="close">
            <v-icon>close</v-icon>
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <slot name="title"/>
        </div>
      </v-card-title>
      <slot name="body">
        <v-card-text class="scroll-target">
          <slot name="content"/>
          <div v-if="fullscreen" class="d-flex justify-end">
            <base-link @click="close">BACK</base-link>
          </div>
        </v-card-text>
      </slot>
    </v-card>
  </v-dialog>
</template>

<style scoped>
>>> .v-dialog {
  overflow-x: hidden;
}
</style>
