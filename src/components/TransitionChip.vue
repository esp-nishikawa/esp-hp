<script>
// transitionするChipコンテンツ
export default {
  props: {
    values: Array,
  },
};
</script>

<template>
  <transition-group tag="div">
    <a
      v-for="value in values"
      :key="value"
      :href="'https://www.google.co.jp/search?q=' + encodeURIComponent(value)"
      target="_blank"
      class="d-inline-block"
    >
      <v-tooltip bottom>
        <v-chip slot="activator" color="blue lighten-1" text-color="white">{{ value }}</v-chip>
        <span>{{ value }}を検索</span>
      </v-tooltip>
    </a>
  </transition-group>
</template>

<style scoped>
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}

.v-leave-active {
  position: absolute;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.v-chip:hover {
  text-decoration: underline;
}

.v-chip >>> .v-chip__content {
  cursor: inherit!important;
  user-select: none!important;
}
</style>
