<script>
import DialogControllable from '@/mixins/dialog-controllable.js';
import DelayText from '@/components/DelayText';
import ViewportShow from '@/components/ViewportShow';

// オフィスのイメージ
export default {
  components: {
    DelayText,
    ViewportShow,
  },
  mixins: [
    DialogControllable,
  ],
  props: {
    value: {
      type: String,
      validator(val) {
        return [
          'entrance',
          'lounge',
          'workspace',
          'boardroom',
          'library',
        ].includes(val);
      },
    },
  },
  data() {
    return {
      historyName: 'office_image_' + this.value,
      isViewport: false,
      createdDialogContent: false,
      carouselValue: 0,
      items: [
        {
          value: 'entrance',
          src: require('@/assets/office_entrance.jpg'),
          title: 'エントランス',
          duration: 1.0,
          rotate: this.$common.getRandom(2, 6),
          scale: 1.10,
          styleOptions: { 'box-shadow': '0px 6px 6px -3px rgba(0,0,0,.2), 0px 10px 14px 1px rgba(0,0,0,.14), 0px 4px 18px 3px rgba(0,0,0,.12)' },
        },
        {
          value: 'lounge',
          src: require('@/assets/office_lounge.jpg'),
          title: 'ラウンジ',
          duration: 1.6,
          rotate: this.$common.getRandom(-10, -6),
          scale: 1.16,
          styleOptions: { 'box-shadow': '0px 8px 10px -5px rgba(0,0,0,.2), 0px 16px 24px 2px rgba(0,0,0,.14), 0px 6px 30px 5px rgba(0,0,0,.12)' },
        },
        {
          value: 'workspace',
          src: require('@/assets/office_workspace.jpg'),
          title: 'ワークスペース',
          duration: 1.4,
          rotate: this.$common.getRandom(-8, 8),
          scale: 1.14,
          styleOptions: { 'box-shadow': '0px 7px 9px -4px rgba(0,0,0,.2), 0px 14px 21px 2px rgba(0,0,0,.14), 0px 5px 26px 4px rgba(0,0,0,.12)' },
        },
        {
          value: 'boardroom',
          src: require('@/assets/office_boardroom.jpg'),
          title: '会議室',
          duration: 1.2,
          rotate: this.$common.getRandom(-6, -2),
          scale: 1.12,
          styleOptions: { 'box-shadow': '0px 7px 8px -4px rgba(0,0,0,.2), 0px 12px 17px 2px rgba(0,0,0,.14), 0px 5px 22px 4px rgba(0,0,0,.12)' },
        },
        {
          value: 'library',
          src: require('@/assets/office_library.jpg'),
          title: 'ライブラリー',
          duration: 1.8,
          rotate: this.$common.getRandom(6, 10),
          scale: 1.18,
          styleOptions: { 'box-shadow': '0px 9px 11px -5px rgba(0,0,0,.2), 0px 18px 28px 2px rgba(0,0,0,.14), 0px 7px 34px 6px rgba(0,0,0,.12)' },
        },
      ],
    };
  },
  computed: {
    itemIndex() {
      return this.items.findIndex(item => item.value === this.value);
    },
    clickable() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
  watch: {
    showDialog(val) {
      // transitionを待ってからDOMを削除
      if (val) {
        this.createdDialogContent = true;
      } else {
        setTimeout(() => {
          this.createdDialogContent = false;
        }, 200);
      }
    },
  },
  methods: {
    onImageClick() {
      if (this.clickable) {
        this.carouselValue = this.itemIndex;
        this.showDialog = true;
      }
    },
  },
};
</script>

<template>
  <viewport-show
    :duration="items[itemIndex].duration"
    :rotate="items[itemIndex].rotate"
    :scale="items[itemIndex].scale"
    :style-options="items[itemIndex].styleOptions"
    @enter="isViewport=true"
  >
    <v-card
      :hover="clickable"
      :ripple="clickable"
      :style="clickable ? {'cursor': 'pointer'} : {'cursor': 'default'}"
      class="image-card"
      @click.native.stop="onImageClick"
    >
      <v-img
        :src="items[itemIndex].src"
        :class="{'hover-image': clickable}"
      />
      <delay-text
        v-show="isViewport"
        delay="1000"
        class="image-title ma-3"
        :value="items[itemIndex].title"
      />

      <v-dialog v-model="showDialog" ref="container" max-width="960">
        <v-card v-if="createdDialogContent">
          <v-layout>
            <delay-text
              class="dialog-title ma-3"
              :value="items[carouselValue].title"
            />
            <v-spacer/>
            <v-btn icon @click="close">
              <v-icon>close</v-icon>
            </v-btn>
          </v-layout>
          <v-carousel
            interval="60000"
            :value="carouselValue"
            @change="carouselValue=$event||0"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            />
          </v-carousel>
        </v-card>
      </v-dialog>
    </v-card>
  </viewport-show>
</template>

<style scoped>
.image-card {
  position:relative;
  overflow: hidden;
}

.image-card .hover-image {
  transition: opacity .3s ease-out, transform .6s ease-out;
}

.image-card:hover .hover-image {
  opacity: 0.8;
  transform: scale(1.05);
}

.image-title {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .03em;
  color: #fff;
  text-shadow: 0 -1px 1px rgba(0,0,0,.4);
}

.dialog-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: .04em;
}
</style>
