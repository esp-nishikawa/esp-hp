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
          src: new URL('@/assets/route_corporate.jpg', import.meta.url).href,
          route: '/corporate',
          headline: '会社案内',
          subheading: 'About Us',
        },
        {
          value: 'service',
          src: new URL('@/assets/route_service.jpg', import.meta.url).href,
          route: '/service',
          headline: '事業分野',
          subheading: 'Our Business',
        },
        {
          value: 'recruit',
          src: new URL('@/assets/route_recruit.jpg', import.meta.url).href,
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
      eager
      :src="items[itemIndex].src"
      :height="$vuetify.display.xs ? 128 : 200"
      class="hover-img"
    />
    <v-card-title class="justify-center">
      <div class="hover-text-wrap">
        <div
          :data-label="items[itemIndex].headline"
          class="headline-text hover-text"
        >
          {{ items[itemIndex].headline }}
        </div>
        <div
          :data-label="items[itemIndex].subheading"
          class="subheading-text hover-text"
        >
          {{ items[itemIndex].subheading }}
        </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<style scoped>
.hover-card .hover-img {
  transition: opacity .3s ease-out;
}

.hover-card:hover .hover-img {
  opacity: 0.8;
}

.hover-card .hover-text-wrap {
  position: relative;
}

.hover-card .hover-text-wrap::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #1976d2;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity .3s ease-out, transform .4s ease-out;
  pointer-events: none;
}

.hover-card:hover .hover-text-wrap::before {
  opacity: 1;
  transform: translateY(0px);
}

.hover-card .hover-text::before {
  content: attr(data-label);
  position: absolute;
  opacity: 0;
  color: #1976d2;
  transform: scale(1.1) translate(10px, -10px) rotate(4deg);
  transition: opacity .3s ease-out, transform .4s ease-out;
  pointer-events: none;
}

.hover-card:hover .hover-text::before {
  transform: scale(1) translate(0px, 0px) rotate(0deg);
  opacity: 1;
}

.headline-text {
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .1em;
  text-shadow: 2px 2px 3px rgba(0,0,0,.2);
}

.subheading-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: .02em;
  color: rgba(0,0,0,.54);
}
</style>
