<template>
  <div class="vertical-table-container">
    <table cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr
          v-for="(rowItem, rowIndex) in rowKeyList"
          :key="rowIndex"
          class="table__row"
        >
          <!-- 根据键值生成 td -->
          <td
            v-for="(colItem, colIndex) in data"
            :key="colIndex"
            class="table_column"
          >
            <div class="cell">
              <slot :name="rowItem" :row="colItem"> </slot>
            </div>
          </td>

          <!-- <td
            v-for="(colItem, colIndex) in data"
            :key="colIndex"
            class="table_column"
          >
            <div class="cell">
              {{ colItem[rowItem] }}
            </div>
          </td> -->
        </tr>
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
    },
    sort: {
      type: Array,
      require: false,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    rowKeyList() {
      if (this.sort.length !== 0) return this.sort;
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