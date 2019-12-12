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
    :data-label="getLabel()"
    class="base-header"
    @click.stop="$router.push(routePath)"
  >
    <slot/>
  </component>
</template>

<style scoped>
.base-header {
  position: relative;
  cursor: pointer;
  color: rgba(0,0,0,.87);
  font-family: Montserrat, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.02em;
}

.base-header::before {
  content: attr(data-label);
  position: absolute;
  top: 0;
  left: 0;
  color: #1976d2;
  overflow: hidden;
  max-width: 0;
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
  width: 100%;
  height: 2px;
  display: block;
  background: #1976d2;
  transform-origin: right;
  transform: scale(0, 1);
  transition: transform .6s cubic-bezier(1, 0, 0, 1);
}

.base-header:hover::after {
  transform-origin: left;
  transform: scale(1, 1);
}
</style>
