<template>
  <div>
    <table cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr
          v-for="(rowItem, rowIndex) in Object.keys(data[0]).length"
          :key="rowIndex"
          class="table__row"
        >
          <!-- 表格头 -->
          <td
            v-for="(colItem, colIndex) in data"
            :key="colIndex"
            class="table_headr"
          >
            <slot name="header" v-bind:row="colItem">
              <div class="table_headr_cell">
                {{ colItem }}
              </div>
            </slot>
          </td>
          <!-- 表格头 end -->

          <!-- 具体数值 -->
          <!-- <td class="table_column">
            <div class="cell" v-text="item"></div>
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
    }
  },
  mounted() {
    console.log(this.data);
  }
};
</script>

<style lang="scss" scoped>
.table__row {
}
</style>