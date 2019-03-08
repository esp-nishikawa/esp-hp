<script>
import DialogControllable from '@/mixins/dialog-controllable.js';
import DelayText from '@/components/DelayText';

// オフィスのイメージ
export default {
  components: {
    DelayText,
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
      createdDialogContent: false,
      carouselValue: 0,
      items: [
        {
          value: 'entrance',
          src: require('@/assets/office_entrance.jpg'),
          title: 'エントランス',
        },
        {
          value: 'lounge',
          src: require('@/assets/office_lounge.jpg'),
          title: 'ラウンジ',
        },
        {
          value: 'workspace',
          src: require('@/assets/office_workspace.jpg'),
          title: 'ワークスペース',
        },
        {
          value: 'boardroom',
          src: require('@/assets/office_boardroom.jpg'),
          title: '会議室',
        },
        {
          value: 'library',
          src: require('@/assets/office_library.jpg'),
          title: 'ライブラリー',
        },
      ],
      historyName: 'office_image_' + this.value,
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
    <div
      v-vpshow="{ duration:2.0, y:-50 }"
      class="image-title white--text mb-1 mr-3"
    >
      {{ items[itemIndex].title }}
    </div>

    <v-dialog v-model="showDialog" ref="container" max-width="960">
      <v-card v-if="createdDialogContent">
        <v-layout>
          <delay-text class="dialog-title ma-3" :value="items[carouselValue].title"/>
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
</template>

<style scoped>
.image-card {
  position:relative;
  overflow: hidden;
}

.image-card .hover-image {
  transition: transform 0.8s;
}

.image-card:hover .hover-image {
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
