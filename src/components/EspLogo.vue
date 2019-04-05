<script>
import DelayText from '@/components/DelayText';

// ロゴ
export default {
  components: {
    DelayText,
  },
};
</script>

<template>
  <v-layout column align-center justify-center class="hover-shadow ma-auto">
    <v-flex class="text-xs-center">
      <delay-text
        class="logo-text"
        value="eSoft"
        delay="500"
      />
    </v-flex>
    <v-flex class="text-xs-center">
      <delay-text
        class="logo-text"
        value="Powers"
        delay="1000"
      />
    </v-flex>
  </v-layout>
</template>

<style scoped>
.logo-text {
  font-size: 112px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #fff;
  opacity: 0.7;
}

.hover-shadow {
  transition: all .4s ease-out;
}

.hover-shadow:hover {
  transform: translateY(-10px);
  text-shadow:
    0 1px 0 hsl(174,5%,80%),
    0 2px 0 hsl(174,5%,75%),
    0 3px 0 hsl(174,5%,70%),
    0 4px 0 hsl(174,5%,66%),
    0 5px 0 hsl(174,5%,64%),
    0 6px 0 hsl(174,5%,62%),
    0 7px 0 hsl(174,5%,61%),
    0 8px 0 hsl(174,5%,60%),
    0 0 5px rgba(0,0,0,.05),
    0 1px 3px rgba(0,0,0,.2),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.2),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.3);
}
</style>
