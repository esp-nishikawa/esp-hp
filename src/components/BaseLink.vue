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
    text
    rounded
    :color="color"
    class="base-link"
    @click="$emit('click')"
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
