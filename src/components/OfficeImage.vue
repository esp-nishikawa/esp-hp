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
<div>
  <v-img
    :src="items[itemIndex].src"
    :style="$vuetify.breakpoint.mdAndUp ? {'cursor': 'pointer'} : {'cursor': 'default'}"
    @click.native="onImageClick"
  >
    <v-layout fill-height align-end justify-end>
      <div v-vpshow="{ duration:2.0, y:-100 }" class="body-2 white--text mb-1 mr-3">{{ items[itemIndex].title }}</div>
    </v-layout>
  </v-img>

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
</div>
</template>
