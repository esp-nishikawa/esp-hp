<script>
// 小見出し
export default {
  props: {
    tag: { type: String, default: 'h3' },
  },
};
</script>

<template>
  <component
    :is="tag"
    class="base-subheading"
  >
    <slot/>
  </component>
</template>

<style scoped>
.base-subheading {
  position: relative;
  margin: 4px 0 4px 0;
  padding: 0 0 3px 7px;
  border-left: 5px solid #42a5f5;
  color: rgba(0,0,0,.87);
  font-family: Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.75;
  letter-spacing: .03em;
}

.base-subheading:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: repeating-linear-gradient(-45deg, #ddd, #ddd 2px, #fff 2px, #fff 4px);
}
</style>
