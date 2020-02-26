<template>
  <div class="vertical-table-container">
    <table cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr
          v-for="(rowItem, rowIndex) in rowKeyList"
          :key="rowIndex"
          class="table__row"
        >
          <td
            v-for="(colItem, colIndex) in data"
            :key="colIndex"
            class="table_column"
          >
            <div class="cell">
              {{ colItem[rowItem] }}
            </div>
          </td>
        </tr>

        <!-- <tr
          v-for="(rowItem, rowIndex) in headerNameList"
          :key="rowIndex"
          class="table__row"
        > -->

        <!-- 表格头 -->
        <!-- <td
            v-for="(colItem, colIndex) in data"
            :key="colIndex"
            class="table_headr"
          >
            <div v-if="rowIndex === 0" class="table_headr_cell">
              <slot name="header" v-bind:row="colItem">
                {{ colItem }}
              </slot>
            </div>
          </td> -->
        <!-- 表格头 end -->

        <!-- 具体数值 -->
        <!-- <td class="table_column">
            <div class="cell" v-text="item">
              <slot name="cell" v-bind:row="colItem">1111111 </slot>
            </div>
          </td> -->
        <!-- </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      require: true,
      default() {
        return [{}];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    rowKeyList() {
      return Object.keys(this.data[0]);
    }
  },
  mounted() {
    // console.log(this.data);
    // console.log(this.headerNameList);
  }
};
</script>

<style lang="scss" scoped>
.vertical-table-container {
  table {
    width: 100%;
    border-top: 1px solid #dcdcdc;
    border-left: 1px solid #dcdcdc;

    text-align: center;

    .table__row {
      td {
        padding: 8px 0;
        border-bottom: 1px solid #dcdcdc;
        border-right: 1px solid #dcdcdc;
        .cell {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          word-break: break-all;
          line-height: 23px;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>