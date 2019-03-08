<script>
// リンク
export default {
  props: {
    color: { type: String, default: 'blue darken-2' },
  },
};
</script>

<template>
  <v-btn
    flat
    round
    :color="color"
    class="base-link"
  >
    <slot/>
  </v-btn>
</template>

<style scoped>
.base-link {
  margin: 0;
  min-width: 0;
}
</style>
