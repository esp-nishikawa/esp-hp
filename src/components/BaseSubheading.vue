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
  margin: 16px 0 4px 0;
  padding: 0 0 3px 6px;
  border-left: 5px solid #42A5F5;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.75;
  letter-spacing: .02em;
}

.base-subheading:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: repeating-linear-gradient(-45deg, #DDD, #DDD 2px, #FFF 2px, #FFF 4px);
}
</style>
