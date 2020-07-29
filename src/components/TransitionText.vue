<script>
// transitionするテキスト
export default {
  props: {
    value: String,
    vertical: Boolean,
    split: Boolean,
    page: { type: [String, Number], default: 0 },
  },
  data() {
    return {
      characters: this.getCharacters(),
      transitionName: null,
    };
  },
  computed: {
    leaveActiveClass() {
      if (!this.transitionName) return null;
      return this.split ? 'split-leave-active' : 'all-leave-active';
    },
    enterActiveClass() {
      if (!this.transitionName) return null;
      return this.split ? 'split-enter-active' : 'all-enter-active';
    },
    moveClass() {
      if (!this.transitionName) return null;
      return this.split ? 'split-move' : 'all-move';
    },
  },
  watch: {
    split() {
      // `characters`は更新するがtransitionしない
      this.transitionName = null;
      this.characters = this.getCharacters();
    },
    page(newVal, oldVal) {
      if (this.vertical) {
        this.transitionName = newVal < oldVal ? 'down' : 'up';
      } else {
        this.transitionName = newVal < oldVal ? 'right' : 'left';
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
  <transition-group
    tag="div"
    :name="transitionName"
    :leave-active-class="leaveActiveClass"
    :enter-active-class="enterActiveClass"
    :move-class="moveClass"
  >
    <span
      v-for="character in characters"
      :key="character.key"
      v-text="character.value"
      class="d-inline-block"
    />
  </transition-group>
</template>

<style scoped>
.all-leave-active {
  position: absolute;
  transition: opacity .3s, transform .6s;
}

.all-enter-active {
  transition: opacity .3s, transform .6s;
}

.split-leave-active {
  position: absolute;
  transition: opacity .3s, transform 1s;
}

.split-enter-active {
  transition: opacity 1s, transform 1s;
}

.split-move {
  transition: opacity .3s, transform 1s;
}

.up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.up-enter {
  opacity: 0;
  transform: translateY(30px);
}

.down-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.down-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.left-enter {
  opacity: 0;
  transform: translateX(30px);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.right-enter {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
