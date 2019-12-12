<script>
// 業績ハイライト
export default {
  data() {
    return {
      tableHeaders: [
        { text: '年度', value: 'year', align: 'end', sortable: true, width: '70px' },
        { text: '売上高', value: 'sales', align: 'end', sortable: true, width: '80px' },
        { text: '社員数', value: 'employees', align: 'end', sortable: true, width: '80px' },
        { text: '内技術者数', value: 'engineers', align: 'end', sortable: true, width: '90px' },
      ],
      tableItems: [
        {
          year: '2018年度',
          sales: '19,644万円',
          employees: '14名',
          engineers: '12名',
        },
        {
          year: '2017年度',
          sales: '17,167万円',
          employees: '13名',
          engineers: '11名',
        },
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
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
    };
  },
};
</script>

<template>
  <v-sheet>
    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      item-key="year"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :mobile-breakpoint="360"
      hide-default-footer
      must-sort
      @page-count="pageCount = $event"
    />
    <v-divider/>
    <v-pagination
      v-model="page"
      :length="pageCount"
      circle
      class="text-center py-4"
    />
  </v-sheet>
</template>

<style scoped>
>>> .v-data-table thead th {
  color: #fff!important;
  font-size: 15px!important;
  font-weight: 500!important;
  border: 1px solid rgba(255,255,255,.5);
  background: linear-gradient(to bottom, rgba(30,136,229,.7), rgba(30,136,229,.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,.9);
}

>>> .v-data-table-header__icon {
  color: rgba(255,255,255,.9)!important;
}
</style>
