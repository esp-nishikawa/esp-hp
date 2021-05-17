<script>
// リンク
export default {
  props: {
    color: { type: String, default: 'blue darken-2' },
    href: { type: String },
    target: { type: String }
  },
};
</script>

<template>
  <v-btn
    text
    rounded
    :color="color"
    :href="href"
    :target="target"
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
