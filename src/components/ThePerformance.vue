<script>
// 業績ハイライト
export default {
  data() {
    return {
      tableHeaders: [
        { text: '年度', sortable: true, align: 'right', value: 'year' },
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
      pagination: {
        sortBy: 'year',
        descending: true,
        rowsPerPage: 5,
      },
    };
  },
  computed: {
    pages () {
      if (!this.pagination.rowsPerPage || !this.pagination.totalItems) {
        return 0;
      }
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage);
    },
  },
};
</script>

<template>
  <v-sheet height="380px">
    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      item-key="year"
      :pagination.sync="pagination"
      hide-actions
      must-sort
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right" style="min-width:80px;">{{ props.item.year }}</td>
        <td class="text-xs-right" style="min-width:80px;">{{ props.item.sales }}</td>
        <td class="text-xs-right" style="min-width:80px;">{{ props.item.employees }}</td>
        <td class="text-xs-right" style="min-width:100px;">{{ props.item.engineers }}</td>
      </template>
    </v-data-table>
    <v-divider/>
    <v-pagination
      v-model="pagination.page"
      :length="pages"
      circle
      class="pagination"
    />
  </v-sheet>
</template>

<style scoped>
.pagination {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
}

>>> .v-table thead th {
  color: #fff!important;
  font-size: 15px!important;
  font-weight: 500!important;
  white-space: normal!important;
  border: 1px solid rgba(255,255,255,.5);
  background: linear-gradient(to bottom, rgba(30,136,229,.7), rgba(30,136,229,.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,.9);
}

>>> .v-table thead th .v-icon {
  color: rgba(255,255,255,.9)!important;
}
</style>
