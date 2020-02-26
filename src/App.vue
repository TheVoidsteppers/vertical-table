<template>
  <div id="app">
    <div class="app-title">竖直表格 demo</div>

    <div class="table-container">
      <vertical-table :data="tableData">
        <template v-slot:header="scope">
          {{ scope.row.taskName }}
        </template>

        <!-- <table-column v-slot:header="slotProps">
          {{ slotProps }}
        </table-column> -->
      </vertical-table>

      <!-- 
        <el-table-column label="提交时间">
          <template slot-scope="scope">{{
            scope.row.submitTime | formdateTime
          }}</template>
        </el-table-column>
       -->

      <!-- <test>
        <template v-slot:todo="{ todo }">
          {{ todo.name }}
        </template>
      </test> -->
    </div>
  </div>
</template>

<script>
import VerticalTable from "@/components/VerticalTable.vue";
import Test from "@/components/Test.vue";
import { tableData } from "@/assets/js/table-data.js";

export default {
  name: "app",
  components: {
    VerticalTable,
    Test
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
    background-color: #fff;
    padding: 20px 24px;
  }
}
</style>
