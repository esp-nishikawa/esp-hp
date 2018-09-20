<script>
import { Vpshow } from '@/directives/vpshow.js';

export default {
  data () {
    return {
      isDialog: false,
      carouselValue: 0,
      items: [
        {
          src: require('@/assets/office_entrance.jpg'),
          title: 'エントランス',
        },
        {
          src: require('@/assets/office_lounge.jpg'),
          title: 'ラウンジ',
        },
        {
          src: require('@/assets/office_workspace.jpg'),
          title: 'ワークスペース',
        },
        {
          src: require('@/assets/office_boardroom.jpg'),
          title: '会議室',
        },
        {
          src: require('@/assets/office_library.jpg'),
          title: 'ライブラリー',
        },
      ],
    }
  },
  props: {
    itemIndex: Number,
  },
  methods: {
    onImageClick() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.carouselValue=this.itemIndex;
        this.isDialog = true;
      }
    },
  },
  directives: {
    Vpshow,
  },
}
</script>

<template>
<v-card
  :hover="$vuetify.breakpoint.mdAndUp"
  :ripple="$vuetify.breakpoint.mdAndUp"
  :style="$vuetify.breakpoint.mdAndUp ? {'cursor': 'pointer'} : {'cursor': 'default'}"
  class="image-card"
  @click.native="onImageClick"
>
  <v-img
    :src="items[itemIndex].src"
    :class="{'hover-image': $vuetify.breakpoint.mdAndUp}"
  >
  </v-img>
  <div
    v-vpshow="{ duration:2.0, y:-50 }"
    class="image-title body-2 white--text mb-1 mr-3"
  >
    {{ items[itemIndex].title }}
  </div>

  <v-dialog v-model="isDialog" max-width="960">
    <v-card>
      <v-layout>
        <v-fade-transition leave-absolute>
          <div :key="carouselValue" class="title ma-3">{{ items[carouselValue].title }}</div>
        </v-fade-transition>
        <v-spacer></v-spacer>
        <v-btn icon @click="isDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-layout>
      <v-carousel interval="60000" v-model="carouselValue">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        >
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-dialog>
</v-card>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.image-card .image-title {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
