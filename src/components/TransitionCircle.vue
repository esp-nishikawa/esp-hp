<script>
// transitionする円形コンテンツ
export default {
  props: {
    size: { type: [String, Number], default: 128 },
    autoTimer: [String, Number],
  },
  data() {
    return {
      isTransition: false,
    };
  },
  computed: {
    styles() {
      return {
        width: isNaN(this.size) ? this.size : `${this.size}px`,
        height: isNaN(this.size) ? this.size : `${this.size}px`,
      };
    },
  },
  mounted() {
    if (this.autoTimer) {
      setTimeout(() => { this.isTransition = true; }, Number(this.autoTimer));
    }
  },
  methods: {
    onClick() {
      this.isTransition = !this.isTransition;
    },
  },
};
</script>

<template>
  <v-layout
    align-center
    justify-center
    v-ripple
    class="d-inline-flex circle-layout"
    :style="styles"
    @click="onClick"
  >
    <transition mode="out-in">
      <div v-if="isTransition" key="on">
        <slot name="after"/>
      </div>
      <div v-else key="off">
        <slot name="before"/>
      </div>
    </transition>
  </v-layout>
</template>

<style scoped>
.circle-layout {
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
}

@media (min-width: 960px) {
  .circle-layout:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);
  }
}

@media (max-width: 960px) {
  .circle-layout {
    transform: scale(0.9);
  }
}

@media (max-width: 600px) {
  .circle-layout {
    transform: scale(0.8);
  }
}

.v-leave-active {
  transition: all .3s;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(100%) scale(0.5);
}

.v-enter-active {
  transition: all .7s;
}

.v-enter {
  opacity: 0;
  transform: translateY(-100%) scale(0.5);
}
</style>
