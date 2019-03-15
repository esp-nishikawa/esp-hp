<script>
// ヘッダー
export default {
  props: {
    tag: { type: String, default: 'h1' },
    routePath: { type: String, default: '/' },
  },
  methods: {
    getLabel() {
      const children = this.$slots.default || [];
      if (children.length > 0) {
        return children[0].text;
      }
      return '';
    },
  },
};
</script>

<template>
  <component
    :is="tag"
    class="base-header"
    :data-label="getLabel()"
    @click.stop="$router.push(routePath)"
  >
    <slot/>
  </component>
</template>

<style scoped>
.base-header {
  position: relative;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.75;
  letter-spacing: .02em;
}

.base-header::before {
  content: attr(data-label);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  max-width: 0;
  color: #1976D2;
  transition: max-width .4s ease-out;
}

.base-header:hover::before {
  max-width: 100%;
}

.base-header::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: calc(100% - 0px);
  height: 2px;
  background: #1976D2;
  display: block;
  transform-origin: right top;
  transform: scale(0, 1);
  transition: transform .6s cubic-bezier(1, 0, 0, 1);
}

.base-header:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>
