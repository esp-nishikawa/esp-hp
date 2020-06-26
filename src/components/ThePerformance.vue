<script>
// 業績ハイライト
export default {
  data() {
    return {
      items: [
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
      itemsPerPage: 5,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    activeItems() {
      return this.items.slice(this.itemsPerPage * (this.page - 1), this.itemsPerPage * this.page);
    },
  },
};
</script>

<template>
  <v-sheet>
    <v-simple-table height="300">
      <template>
        <thead>
          <tr>
            <th class="table-th column-year">年度</th>
            <th class="table-th column-sales">売上高</th>
            <th class="table-th column-employees">社員数</th>
            <th class="table-th column-engineers">内技術者数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in activeItems" :key="item.year">
            <td class="column-year">{{ item.year }}</td>
            <td class="column-sales">{{ item.sales }}</td>
            <td class="column-employees">{{ item.employees }}</td>
            <td class="column-engineers">{{ item.engineers }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination
      v-model="page"
      :length="pageCount"
      circle
      class="text-center pb-7"
    />
  </v-sheet>
</template>

<style scoped>
.table-th {
  color: #fff!important;
  font-size: 15px!important;
  font-weight: 500!important;
  border: 1px solid rgba(255,255,255,.5);
  background: linear-gradient(to bottom, rgba(30,136,229,.7), rgba(30,136,229,.9));
  text-shadow: 0 -1px 0 rgba(30,136,229,.9);
}

.column-year {
  width: 70px;
  text-align: right!important;
}

.column-sales {
  width: 80px;
  text-align: right!important;
}

.column-employees {
  width: 80px;
  text-align: right!important;
}

.column-engineers {
  width: 90px;
  text-align: right!important;
}

>>> table {
  border-bottom: thin solid rgba(0,0,0,.12);
}
</style>
