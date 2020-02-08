<script>
// animationする花びら
export default {
  props: {
    value: Boolean,
    startOffset: { type: [String, Number], default: -100 },
  },
  data() {
    return {
      top: 0,
      left: 0,
      speed: 0,
      fluctuation: 0,
      count: 0,
      opacity: 0,
      animationFrame: null,
      classes: null,
    };
  },
  computed: {
    styles() {
      return {
        opacity: this.opacity,
        top: `${this.top}px`,
        left: `${this.left}px`,
      };
    },
  },
  watch: {
    value(val) {
      if (val) {
        this.start();
      } else {
        this.stop();
      }
    },
  },
  mounted() {
    this.init(Number(this.startOffset));
    if (this.value) {
      this.start();
    }
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    parentWidth() {
      return this.$el.parentNode.clientWidth;
    },
    parentHeight() {
      return this.$el.parentNode.clientHeight;
    },
    init(offset = -100) {
      this.top = offset;
      this.left = this.$common.getRandom(0, this.parentWidth() - 40);
      this.speed = this.$common.getRandom(0.4, 1.2);
      this.fluctuation = this.$common.getRandom(80, 160);
      this.count = 0;
      this.opacity = this.$common.getRandom(0.3, 0.6);
      this.classes = [
        'petal',
        'color' + this.$common.getRandom(1, 6, true),
        'animation' + this.$common.getRandom(1, 6, true),
      ];
    },
    animation() {
      if (this.top <= this.parentHeight()) {
        this.top = this.top + this.speed;
        if (this.count <= this.fluctuation) {
          this.left = this.left + this.$common.getRandom(0.1, 0.3);
        } else {
          this.left = this.left - this.$common.getRandom(0.1, 0.3);
        }
        if (this.count <= (this.fluctuation * 2)) {
          this.count++;
        } else {
          this.count = 0;
        }
      } else {
        this.init();
      }
      this.animationFrame = requestAnimationFrame(this.animation);
    },
    start() {
      cancelAnimationFrame(this.animationFrame);
      this.animation();
    },
    stop() {
      cancelAnimationFrame(this.animationFrame);
    },
  },
};
</script>

<template>
  <div
    :class="classes"
    :style="styles"
  />
</template>

<style scoped>
.petal {
  position: absolute;
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 10px;
  border-radius: 15px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}

.petal::before {
  content: '';
  display: block;
  position: absolute;
  top: -7px;
  left: -7px;
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 10px;
  border-radius: 15px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  transform: rotate(15deg);
}

.color1 {
  border-color: #eeff41;
  background-color: #eeff41;
}
.color1::before {
  border-color: #eeff41;
  background-color: #eeff41;
}
.color2 {
  border-color: #ffeb3b;
  background-color: #ffeb3b;
}
.color2::before {
  border-color: #ffeb3b;
  background-color: #ffeb3b;
}
.color3 {
  border-color: #ffff2f;
  background-color: #ffff2f;
}
.color3::before {
  border-color: #ffff2f;
  background-color: #ffff2f;
}
.color4 {
  border-color: #ffff00;
  background-color: #ffff00;
}
.color4::before {
  border-color: #ffff00;
  background-color: #ffff00;
}
.color5 {
  border-color: #ffea00;
  background-color: #ffea00;
}
.color5::before {
  border-color: #ffea00;
  background-color: #ffea00;
}
.color6 {
  border-color: #ffd600;
  background-color: #ffd600;
}
.color6::before {
  border-color: #ffd600;
  background-color: #ffd600;
}

.animation1 {
  animation: transform1 15s infinite;
}
.animation2 {
  animation: transform2 14s infinite;
}
.animation3 {
  animation: transform3 13s infinite;
}
.animation4 {
  animation: transform4 12s infinite;
}
.animation5 {
  animation: transform5 11s infinite;
}
.animation6 {
  animation: transform6 10s infinite;
}
@keyframes transform1 {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(270deg) scale(1); }
  100% { transform: rotate(0deg) scale(1); }
}
@keyframes transform2 {
  0% { transform: rotate(-90deg) scale(.95); }
  50% { transform: rotate(-360deg) scale(.95); }
  100% { transform: rotate(-90deg) scale(.95); }
}
@keyframes transform3 {
  0% { transform: rotate(30deg) scale(.9); }
  50% { transform: rotate(300deg) scale(.9); }
  100% { transform: rotate(30deg) scale(.9); }
}
@keyframes transform4 {
  0% { transform: rotate(-60deg) scale(.85); }
  50% { transform: rotate(-330deg) scale(.85); }
  100% { transform: rotate(-60deg) scale(.85); }
}
@keyframes transform5 {
  0% { transform: rotate(60deg) scale(.8); }
  50% { transform: rotate(330deg) scale(.8); }
  100% { transform: rotate(60deg) scale(.8); }
}
@keyframes transform6 {
  0% { transform: rotate(-30deg) scale(.75); }
  50% { transform: rotate(-300deg) scale(.75); }
  100% { transform: rotate(-30deg) scale(.75); }
}
</style>
