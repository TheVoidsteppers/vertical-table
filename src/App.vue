<template>
  <div id="app">
    <div class="app-title">竖直表格 demo</div>

    <div class="table-container">
      <vertical-table
        :data="tableData"
        :sort="['taskName', 'taskType', 'originalDataName', 'createTime']"
      >
        <template v-slot:taskName="scope">
          {{ scope.row.taskName }}
        </template>

        <template v-slot:taskType="scope">
          {{ scope.row.taskType }}
        </template>

        <template v-slot:originalDataName="scope">
          {{ scope.row.originalDataName }}
        </template>

        <template v-slot:createTime="scope">
          {{ scope.row.createTime | formdateTime }}
        </template>
      </vertical-table>

      <!-- 
        <el-table-column label="提交时间">
          <template slot-scope="scope">{{
            scope.row.submitTime | formdateTime
          }}</template>
        </el-table-column>
       -->
    </div>
  </div>
</template>

<script>
import VerticalTable from "@/components/VerticalTable.vue";

import { tableData } from "@/assets/js/table-data.js";
import { formdateTime } from "@/utils";

export default {
  name: "app",
  filters: {
    formdateTime
  },
  components: {
    VerticalTable
  },
  data() {
    return {
      tableData: tableData
    };
  },
  mounted() {
    // console.log(this.tableData);
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .app-title {
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }

  .table-container {
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    padding: 20px 24px;
  }
}
</style>
