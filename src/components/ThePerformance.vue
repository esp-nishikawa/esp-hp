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
          year: '2016年度',
          sales: '16,510万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          year: '2015年度',
          sales: '15,808万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          year: '2014年度',
          sales: '15,294万円',
          employees: '13名',
          engineers: '11名',
        },
        {
          year: '2013年度',
          sales: '13,133万円',
          employees: '12名',
          engineers: '10名',
        },
        {
          year: '2012年度',
          sales: '11,474万円',
          employees: '10名',
          engineers: '9名',
        },
        {
          year: '2011年度',
          sales: '10,304万円',
          employees: '10名',
          engineers: '9名',
        },
        {
          year: '2010年度',
          sales: '8,070万円',
          employees: '9名',
          engineers: '8名',
        },
        {
          year: '2009年度',
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
    item-key="year"
    hide-actions
    disable-initial-sort
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right" style="min-width:80px;">{{ props.item.year }}</td>
      <td class="text-xs-right" style="min-width:100px;">{{ props.item.sales }}</td>
      <td class="text-xs-right" style="min-width:80px;">{{ props.item.employees }}</td>
      <td class="text-xs-right" style="min-width:100px;">{{ props.item.engineers }}</td>
    </template>
  </v-data-table>
</template>

<style scoped>
>>> .v-table thead th {
  color: #fff!important;
  font-size: 15px!important;
  font-weight: 500!important;
  white-space: normal!important;
  border: 1px solid #ddd;
  background: linear-gradient(to bottom, rgba(30,136,229,.7), rgba(30,136,229,.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,.9);
  box-shadow: 0px 1px 1px rgba(255,255,255,.3) inset;
}
</style>
