<script>
// テキストアニメーション
export default {
  props: {
    value: String,
    delay: { type: [String, Number], default: 100 },
  },
  data() {
    return {
      characters: this.value,
    };
  },
  watch: {
    value(val) {
      // 1度クリアしてから更新
      this.characters = '';
      this.$nextTick(() => {
        this.characters = val;
      });
    },
  },
};
</script>

<template>
  <div class="d-flex">
    <span
      v-for="(character, c) in characters"
      :key="c"
      v-text="character"
      class="delay-character"
      :style="{ animationDelay: Number(delay) + c*100 + 'ms' }"
    />
  </div>
</template>

<style scoped>
@keyframes character-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.delay-character {
  animation: character-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>
