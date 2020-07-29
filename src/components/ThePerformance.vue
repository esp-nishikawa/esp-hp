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
      sortAsc: false,
      transitionName: 'up',
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    activeItems() {
      return this.items.slice()
        .sort((a, b) => {
          const comparison = a.year.match(/\d+/) - b.year.match(/\d+/);
          return this.sortAsc ? comparison : -comparison;
        })
        .slice(this.itemsPerPage * (this.page - 1), this.itemsPerPage * this.page);
    },
  },
  watch: {
    page(newVal, oldVal) {
      this.transitionName = newVal < oldVal ? 'right' : 'left';
    },
  },
  methods: {
    toggleSort() {
      this.sortAsc = !this.sortAsc;
      this.transitionName = this.sortAsc ? 'up' : 'down';
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
    },
  },
};
</script>

<template>
  <v-sheet>
    <v-simple-table
      height="300"
      fixed-header
      v-touch="{
        left: nextPage,
        right: prevPage,
      }"
    >
      <template>
        <thead>
          <tr>
            <th
              class="table-th column-year"
              :class="{'asc': sortAsc}"
              @click="toggleSort"
            >
              <v-icon small color="white" class="mr-1">arrow_downward</v-icon>年度
            </th>
            <th class="table-th column-sales">売上高</th>
            <th class="table-th column-employees">社員数</th>
            <th class="table-th column-engineers">内技術者数</th>
          </tr>
        </thead>
        <tbody
          is="transition-group"
          :name="transitionName"
          leave-active-class="v-leave-active"
          enter-active-class="v-enter-active"
        >
          <tr v-for="item in activeItems" :key="item.year">
            <td class="table-td column-year">{{ item.year }}</td>
            <td class="table-td column-sales">{{ item.sales }}</td>
            <td class="table-td column-employees">{{ item.employees }}</td>
            <td class="table-td column-engineers">{{ item.engineers }}</td>
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
  border: 1px solid rgba(255,255,255,.5)!important;
  background: linear-gradient(to bottom, rgba(30,136,229,.7), rgba(30,136,229,.9))!important;
  text-shadow: 0 -1px 0 rgba(30,136,229,.9)!important;
}

.table-td {
  color: rgba(0,0,0,.87)!important;
  font-size: 14px!important;
  font-weight: 400!important;
}

.column-year {
  width: 70px;
  text-align: right!important;
  cursor: pointer;
}

.column-year.asc .v-icon {
  transform: rotate(180deg);
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

.v-leave-active {
  position: absolute;
  transition: none;
  opacity: 0;
}

.v-enter-active {
  transition: opacity .3s, transform .6s;
}

.up-enter {
  opacity: 0;
  transform: translateY(30px);
}

.down-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.left-enter {
  opacity: 0;
  transform: translateX(30px);
}

.right-enter {
  opacity: 0;
  transform: translateX(-30px);
}

>>> table {
  overflow: hidden;
  border-bottom: thin solid rgba(0,0,0,.12);
}
</style>
