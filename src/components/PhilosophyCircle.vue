<script>
// 理念
export default {
  props: {
    autoTimer: [String, Number],
  },
  data() {
    return {
      timeout: false,
      hover: false,
    };
  },
  mounted() {
    if (this.autoTimer) {
      setTimeout(() => { this.timeout = true; }, Number(this.autoTimer));
    }
  },
};
</script>

<template>
  <div
    class="d-inline-flex scale-down"
    @mouseenter="hover=true"
    @mouseleave="hover=false"
  >
    <transition mode="out-in" name="hover">
      <v-layout v-if="hover" key="hover-on" align-center justify-center class="circle-layout">
        <div class="philosophy-text">
          <slot name="before"/>
        </div>
      </v-layout>
      <v-layout v-else key="hover-off" align-center justify-center class="circle-layout">
        <transition mode="out-in" name="timeout">
          <div v-if="timeout" key="timeout-on" class="philosophy-text">
            <slot name="after"/>
          </div>
          <div v-else key="timeout-off" class="philosophy-text">
            <slot name="before"/>
          </div>
        </transition>
      </v-layout>
    </transition>
  </div>
</template>

<style scoped>
.philosophy-text {
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .02em;
  color: #fff;
}

.circle-layout {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  opacity: 0.7;
  background-color: #29b6f6;
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,.2), 0px 8px 10px 1px rgba(0,0,0,.14), 0px 3px 14px 2px rgba(0,0,0,.12);
}

@media (max-width: 960px) {
  .scale-down {
    transform: scale(0.9);
  }
}

@media (max-width: 600px) {
  .scale-down {
    transform: scale(0.8);
  }
}

.timeout-leave-active {
  transition: all .3s ease;
}

.timeout-leave-to {
  opacity: 0;
  transform: translateY(100%) scale(0.5);
}

.timeout-enter-active {
  transition: all .7s ease-out;
}

.timeout-enter {
  opacity: 0;
  transform: translateY(-100%) scale(0.5);
}

.hover-leave-active {
  transition: all .3s ease;
}

.hover-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}

.hover-enter-active {
  transition: opacity .3s ease-out, transform .7s ease-out;
}

.hover-enter {
  opacity: 0;
  transform: rotateY(90deg);
}
</style>
