<script>
import DialogWrapper from '@/components/DialogWrapper';

// 給与ダイアログ
export default {
  components: {
    DialogWrapper,
  },
  props: {
    midCareer: Boolean,
  },
  data() {
    return {
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
    };
  },
};
</script>

<template>
  <dialog-wrapper :dialog-key="midCareer ? 'compensation_dialog_mid' : 'compensation_dialog_new'" max-width="600">
    <template #activator>
      <slot/>
    </template>
    <template #title>
      <base-headline>COMPENSATION</base-headline>
    </template>
    <template #content>
      <v-container grid-list-xs :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pt-0'">
        <v-layout v-if="midCareer" row wrap class="py-3">
          <v-flex xs12>
            <div>経験に応じて、当社規定により優遇。</div>
          </v-flex>
        </v-layout>
        <v-layout v-else row wrap>
          <v-flex xs12>
            <base-subheading>初任給（平成２９年度実績）</base-subheading>
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
            <base-subheading>年収モデル</base-subheading>
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
            <base-subheading>諸手当</base-subheading>
            <div>通勤手当（全額）、家族手当、時間外手当、役職手当</div>
            <base-subheading>昇給</base-subheading>
            <div>年１回（７月）</div>
            <base-subheading>賞与</base-subheading>
            <div>年２回（６月、１２月）</div>
            <div>※年間平均４.０カ月＋α（平成２９年度実績）</div>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </dialog-wrapper>
</template>
