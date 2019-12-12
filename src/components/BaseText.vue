<script>
// テキスト
export default {
  props: {
    tag: { type: String, default: 'div' },
  },
};
</script>

<template>
  <component
    :is="tag"
    class="base-text"
  >
    <slot/>
  </component>
</template>

<style scoped>
.base-text {
  color: rgba(0,0,0,.87);
  font-family: Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: .02em;
}
</style>
