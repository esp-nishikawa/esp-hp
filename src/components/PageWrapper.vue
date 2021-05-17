<script>
import ContactDialog from '@/components/ContactDialog';
import PrivacyDialog from '@/components/PrivacyDialog';

// 各ページの共通ラッパー
export default {
  components: {
    ContactDialog,
    PrivacyDialog,
  },
  props: {
    background: [String, Number],
  },
  computed: {
    // 背景1
    background1() {
      return Number(this.background) === 1;
    },
    // 背景2
    background2() {
      return Number(this.background) === 2;
    },
  },
};
</script>

<template>
  <v-main class="page-wrapper">
    <div v-if="background1" class="background1-before"/>
    <div v-if="background1" class="background1-after"/>
    <div v-if="background2" class="background2-before"/>
    <div v-if="background2" class="background2-after"/>
    <slot/>

    <v-footer dark color="blue darken-1">
      <v-container class="my-3">
        <v-row justify="end">
          <contact-dialog>
            <v-btn text rounded color="white">
              <v-icon class="mr-1">email</v-icon>お問い合わせ
            </v-btn>
          </contact-dialog>
          <privacy-dialog>
            <v-btn text rounded color="white">
              <v-icon class="mr-1">lock</v-icon>プライバシーポリシー
            </v-btn>
          </privacy-dialog>
        </v-row>
        <v-row justify="center">
          <div class="ma-4">&copy; 2013-{{ new Date().getFullYear() }} eSoftPowers.Co.,Ltd.</div>
        </v-row>
      </v-container>
    </v-footer>
  </v-main>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  z-index: 0;
}

.background1-before {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("~@/assets/bg1_before.gif");
  background-repeat: repeat;
  opacity: 0.7;
  animation: background-out 60s linear forwards;
}

.background1-after {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("~@/assets/bg1_after.gif");
  background-repeat: repeat;
  opacity: 0;
  animation: background-in 60s linear forwards;
}

.background2-before {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("~@/assets/bg2_before.gif");
  background-repeat: repeat;
  opacity: 0.7;
  animation: background-out 60s linear forwards;
}

.background2-after {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("~@/assets/bg2_after.gif");
  background-repeat: repeat;
  opacity: 0;
  animation: background-in 60s linear forwards;
}

@keyframes background-out {
  0% { opacity: 0.7; }
  100% { opacity: 0; }
}

@keyframes background-in {
  0% { opacity: 0; }
  100% { opacity: 0.7; }
}
</style>
