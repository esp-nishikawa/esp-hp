<script>
// 業績ハイライト
export default {
  data() {
    return {
      tableHeaders: [
        { text: '年度', sortable: false, align: 'right', value: 'year' },
        { text: '売上高', sortable: false, align: 'right', value: 'sales' },
        { text: '社員数', sortable: false, align: 'right', value: 'employees' },
        { text: '内技術者数', sortable: false, align: 'right', value: 'engineers' },
      ],
      tableItems: [
        {
          value: false,
          year: '28年度',
          sales: '16,510万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          value: false,
          year: '27年度',
          sales: '15,808万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          value: false,
          year: '26年度',
          sales: '15,294万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          value: false,
          year: '25年度',
          sales: '13,133万円',
          employees: '12名',
          engineers: '10名',
        },
        {
          value: false,
          year: '24年度',
          sales: '11,474万円',
          employees: '10名',
          engineers: '9名',
        },
        {
          value: false,
          year: '23年度',
          sales: '10,304万円',
          employees: '10名',
          engineers: '9名',
        },
        {
          value: false,
          year: '22年度',
          sales: '8,070万円',
          employees: '9名',
          engineers: '8名',
        },
        {
          value: false,
          year: '21年度',
          sales: '8,760万円',
          employees: '9名',
          engineers: '8名',
        },
      ],
    };
  },
};
</script>

<template>
  <v-data-table
    :headers="tableHeaders"
    :items="tableItems"
    hide-actions
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.year }}</td>
      <td class="text-xs-right">{{ props.item.sales }}</td>
      <td class="text-xs-right">{{ props.item.employees }}</td>
      <td class="text-xs-right">{{ props.item.engineers }}</td>
    </template>
  </v-data-table>
</template>

<style scoped>
>>> table th {
  color: #FFF!important;
  font-size: 15px!important;
  font-weight: 500!important;
  border: 1px solid #DDD;
  background: linear-gradient(to bottom, rgba(30,136,229,0.7), rgba(30,136,229,0.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,0.9);
  box-shadow: 0px 1px 1px rgba(255,255,255,0.3) inset;
}
</style>
