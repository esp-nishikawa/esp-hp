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
.split-leave-active {
  position: absolute;
  transition: opacity .3s;
}

.split-leave-to {
  opacity: 0;
}

.split-enter-active {
  transition: opacity 1s, transform 1s;
}

.split-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.split-move {
  transition: opacity .3s, transform 1s;
}

.prev-leave-active {
  position: absolute;
  transition: opacity .3s, transform .6s;
}

.prev-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.prev-enter-active {
  transition: opacity .3s, transform .6s;
}

.prev-enter {
  opacity: 0;
  transform: translateX(30px);
}

.next-leave-active {
  position: absolute;
  transition: opacity .3s, transform .6s;
}

.next-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.next-enter-active {
  transition: opacity .3s, transform .6s;
}

.next-enter {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
