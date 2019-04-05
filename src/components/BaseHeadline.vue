<script>
// 見出し
export default {
  props: {
    tag: { type: String, default: 'h2' },
  },
};
</script>

<template>
  <component
    :is="tag"
    class="base-headline"
  >
    <slot/>
  </component>
</template>

<style scoped>
.base-headline {
  margin: 24px 0 16px 0;
  font-family: Montserrat, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: .2em;
}
</style>
