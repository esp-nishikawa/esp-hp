<script>
// 各ページへのルートのイメージ
export default {
  props: {
    value: {
      type: String,
      validator(val) {
        return [
          'corporate',
          'service',
          'recruit',
        ].includes(val);
      },
    },
  },
  data() {
    return {
      items: [
        {
          value: 'corporate',
          src: require('@/assets/route_corporate.jpg'),
          route: '/corporate',
          headline: '会社案内',
          subheading: 'About Us',
        },
        {
          value: 'service',
          src: require('@/assets/route_service.jpg'),
          route: '/service',
          headline: '事業分野',
          subheading: 'Our Business',
        },
        {
          value: 'recruit',
          src: require('@/assets/route_recruit.jpg'),
          route: '/recruit',
          headline: '採用情報',
          subheading: 'Recruit',
        },
      ],
    };
  },
  computed: {
    itemIndex() {
      return this.items.findIndex(item => item.value === this.value);
    },
  },
};
</script>

<template>
  <v-card
    raised
    hover
    ripple
    class="hover-card"
    @click.native="$router.push(items[itemIndex].route)"
  >
    <v-img
      class="hover-img"
      :src="items[itemIndex].src"
      :height="$vuetify.breakpoint.xs ? 128 : 200"
    />
    <v-card-title primary-title class="layout justify-center">
      <div class="hover-headline">
        <div
          class="headline-text hover-text"
          :data-label="items[itemIndex].headline"
        >
          {{ items[itemIndex].headline }}
        </div>
        <span
          class="subheading-text hover-text"
          :data-label="items[itemIndex].subheading"
        >
          {{ items[itemIndex].subheading }}
        </span>
      </div>
    </v-card-title>
  </v-card>
</template>

<style scoped>
.hover-card .hover-img {
  transition: opacity 0.4s;
}

.hover-card:hover .hover-img {
  opacity: 0.8;
}

.hover-card .hover-headline {
  position: relative;
  font-size: 14px;
}

.hover-card .hover-headline::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #1976D2;
  opacity: 0;
  transform: translateY(5px);
  transition: transform 0.4s, opacity 0.4s;
  pointer-events: none;
}

.hover-card:hover .hover-headline::before {
  opacity: 1;
  transform: translateY(0px);
}

.hover-card .hover-text::before {
  content: attr(data-label);
  position: absolute;
  opacity: 0;
  color: #1976D2;
  transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);
  transition: transform 0.3s, opacity 0.3s;
  pointer-events: none;
}

.hover-card:hover .hover-text::before {
  transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
  opacity: 1;
}

.headline-text {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}

.subheading-text {
  font-size: 14px;
  color: rgba(0,0,0,.54);
}
</style>
