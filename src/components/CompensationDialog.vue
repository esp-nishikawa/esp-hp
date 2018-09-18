<script>
export default {
  data () {
    return {
      isDialog: false,
      initialItems: [
        {
          value: false,
          education: '大学院（修士）卒',
          salary: '214,700円',
        },
        {
          value: false,
          education: '大学卒',
          salary: '204,300円',
        },
        {
          value: false,
          education: '専門卒（３年制）',
          salary: '200,900円',
        },
        {
          value: false,
          education: '高専・短大・専門卒（２年制）',
          salary: '198,000円',
        },
      ],
      annualItems: [
        {
          value: false,
          age: '２４歳',
          salary: '３８３万',
        },
        {
          value: false,
          age: '２７歳',
          salary: '４１０万',
        },
        {
          value: false,
          age: '３１歳',
          salary: '４６１万',
        },
      ],
    }
  },
  props: {
    midCareer: Boolean,
    btnLabel: String,
  },
}
</script>

<template>
<v-dialog v-model="isDialog" max-width="600" :fullscreen="$vuetify.breakpoint.smAndDown">
  <v-btn flat color="blue darken-2" slot="activator">{{ btnLabel }}</v-btn>
  <v-card>
    <v-layout v-if="$vuetify.breakpoint.smAndDown" justify-start>
      <v-btn icon @click="isDialog = false">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-layout>
    <v-layout v-else justify-end>
      <v-btn icon @click="isDialog = false">
        <v-icon>close</v-icon>
      </v-btn>
    </v-layout>
    <v-card-title primary-title class="layout justify-center py-0">
      <h2>COMPENSATION</h2>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
        <v-layout v-if="midCareer" row wrap class="py-3">
          <v-flex xs12>
            <div>経験に応じて、当社規定により優遇。</div>
          </v-flex>
        </v-layout>
        <v-layout v-else row wrap>
          <v-flex xs12>
            <h3>初任給（平成２９年度実績）</h3>
            <v-data-table
              :items="initialItems"
              hide-actions
              hide-headers
              class="elevation-3"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.education }}</td>
                <td class="text-xs-left">{{ props.item.salary }}</td>
              </template>
            </v-data-table>
            <div>※この表の金額は基準給で独身者の場合</div>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <h3>年収モデル</h3>
            <v-data-table
              :items="annualItems"
              hide-actions
              hide-headers
              class="elevation-3"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.age }}</td>
                <td class="text-xs-left">{{ props.item.salary }}</td>
              </template>
            </v-data-table>
            <div>※年間賞与4ヶ月、1ヶ月の残業20Hとした場合。</div>
            <h3>諸手当</h3>
            <div>通勤手当（全額）、家族手当、時間外手当、役職手当</div>
            <h3>昇給</h3>
            <div>年１回（７月）</div>
            <h3>賞与</h3>
            <div>年２回（６月、１２月）</div>
            <div>※年間平均４.０カ月＋α（平成２９年度実績）</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions v-if="$vuetify.breakpoint.smAndDown">
      <v-spacer></v-spacer>
      <v-btn flat color="blue darken-2" @click="isDialog = false">BACK</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>
