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
          education: '大学院（修士）卒',
          salary: '214,700円',
        },
        {
          education: '大学卒',
          salary: '204,300円',
        },
        {
          education: '専門卒（３年制）',
          salary: '200,900円',
        },
        {
          education: '高専・短大・専門卒（２年制）',
          salary: '198,000円',
        },
      ],
      annualItems: [
        {
          age: '２４歳',
          salary: '３８３万',
        },
        {
          age: '２７歳',
          salary: '４１０万',
        },
        {
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
      <v-container class="px-0 px-sm-3">
        <v-row v-if="midCareer" class="mt-2">
          <v-col>
            <base-text>経験に応じて、当社規定により優遇。</base-text>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <base-subheading>初任給（平成２９年度実績）</base-subheading>
            <v-simple-table class="elevation-2">
              <template>
                <tbody>
                  <tr v-for="item in initialItems" :key="item.education">
                    <td>{{ item.education }}</td>
                    <td>{{ item.salary }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <base-text>※この表の金額は基準給で独身者の場合</base-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <base-subheading>年収モデル</base-subheading>
            <v-simple-table class="elevation-2">
              <template>
                <tbody>
                  <tr v-for="item in annualItems" :key="item.age">
                    <td>{{ item.age }}</td>
                    <td>{{ item.salary }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <base-text>※年間賞与4ヶ月、1ヶ月の残業20Hとした場合。</base-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <base-subheading>諸手当</base-subheading>
            <base-text>通勤手当（全額）、家族手当、時間外手当、役職手当</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>昇給</base-subheading>
            <base-text>年１回（７月）</base-text>
          </v-col>
          <v-col cols="12">
            <base-subheading>賞与</base-subheading>
            <base-text>年２回（６月、１２月）</base-text>
            <base-text>※年間平均４.０カ月＋α（平成２９年度実績）</base-text>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </dialog-wrapper>
</template>
