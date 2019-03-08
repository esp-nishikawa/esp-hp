<script>
// transitionするテキスト
export default {
  props: {
    value: String,
    split: Boolean,
    page: { type: [String, Number], default: 0 },
  },
  data() {
    return {
      characters: this.getCharacters(),
      transitionName: null,
    };
  },
  watch: {
    split() {
      this.transitionName = null;
      this.characters = this.getCharacters();
    },
    page(newVal, oldVal) {
      if (this.split) {
        this.transitionName = 'split';
      } else {
        this.transitionName = newVal < oldVal ? 'prev' : 'next';
      }
      this.characters = this.getCharacters();
    },
  },
  methods: {
    getCharacters() {
      const indexes = {};
      let characters;
      if (this.split) {
        characters = this.value.split('').map(el => {
          indexes[el] = indexes[el] ? ++indexes[el] : 1;
          return { key: `${el}_${indexes[el]}`, value: el };
        });
      } else {
        characters = [{ key: String(this.page), value: this.value }];
      }
      return Object.freeze(characters);
    },
  },
};
</script>

<template>
  <transition-group tag="div" :name="transitionName">
    <span
      v-for="character in characters"
      :key="character.key"
      v-text="character.value"
      class="d-inline-block"
    />
  </transition-group>
</template>

<style scoped>
.split-enter-active,
.split-leave-active,
.split-move {
  transition: all 1s;
}

.split-leave-active {
  position: absolute;
}

.split-enter,
.split-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.prev-enter-active,
.prev-leave-active {
  transition: all .6s;
}

.prev-leave-active {
  position: absolute;
}

.prev-enter,
.prev-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.next-enter-active,
.next-leave-active {
  transition: all .6s;
}

.next-leave-active {
  position: absolute;
}

.next-enter,
.next-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
