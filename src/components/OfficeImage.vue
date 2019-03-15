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
          duration: 1.2,
        },
        {
          value: 'lounge',
          src: require('@/assets/office_lounge.jpg'),
          title: 'ラウンジ',
          duration: 2.0,
        },
        {
          value: 'workspace',
          src: require('@/assets/office_workspace.jpg'),
          title: 'ワークスペース',
          duration: 1.6,
        },
        {
          value: 'boardroom',
          src: require('@/assets/office_boardroom.jpg'),
          title: '会議室',
          duration: 1.2,
        },
        {
          value: 'library',
          src: require('@/assets/office_library.jpg'),
          title: 'ライブラリー',
          duration: 2.0,
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
        class="image-title white--text mb-1 mr-3"
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
          <v-carousel interval="60000" v-model="carouselValue">
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
}

.dialog-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
}
</style>
