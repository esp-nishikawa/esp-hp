<script>
// transitionするChipコンテンツ
export default {
  props: {
    values: Array,
    page: { type: [String, Number], default: 0 },
  },
  data() {
    return {
      transitionName: 'next',
    };
  },
  computed: {
    searchable() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
  watch: {
    page(newVal, oldVal) {
      this.transitionName = newVal < oldVal ? 'prev' : 'next';
    },
  },
};
</script>

<template>
  <transition-group
    tag="div"
    :name="transitionName"
    leave-active-class="v-leave-active"
    enter-active-class="v-enter-active"
    move-class="v-move"
  >
    <template v-if="searchable">
      <div
        v-for="value in values"
        :key="value"
        class="d-inline-block ma-1"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-chip
              v-on="on"
              color="blue lighten-1"
              text-color="white"
              link
              :href="'https://www.google.co.jp/search?q=' + encodeURIComponent(value)"
              target="_blank"
              class="hover-chip-link"
            >
              {{ value }}
            </v-chip>
          </template>
          <span>{{ value }}を検索</span>
        </v-tooltip>
      </div>
    </template>
    <template v-else>
      <v-chip
        v-for="value in values"
        :key="value"
        color="blue lighten-1"
        text-color="white"
        class="d-inline-block ma-1"
       >
        {{ value }}
      </v-chip>
    </template>
  </transition-group>
</template>

<style scoped>
.v-leave-active {
  position: absolute;
  transition: opacity .3s, transform 1s;
}

.v-enter-active {
  transition: opacity 1s, transform 1s;
}

.v-move {
  transition: opacity .3s, transform 1s;
}

.prev-leave-to {
  opacity: 0;
}

.prev-enter {
  opacity: 0;
  transform: translateY(30px);
}

.next-leave-to {
  opacity: 0;
}

.next-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.hover-chip-link:hover {
  text-decoration: underline;
}
</style>
