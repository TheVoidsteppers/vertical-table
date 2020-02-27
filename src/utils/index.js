export function formdateTime(time) {
  var d = new Date(time);
  var year = d.getFullYear(); //取得4位数的年份
  var month = addZero(d.getMonth() + 1); //取得日期中的月份，其中0表示1月，11表示12月
  var date = addZero(d.getDate()); //返回日期月份中的天数（1到31）
  var hour = addZero(d.getHours()); //返回日期中的小时数（0到23）
  var minute = addZero(d.getMinutes()); //返回日期中的分钟数（0到59）
  var second = addZero(d.getSeconds()); //返回日期中的秒数（0到59）
  // 数字补0操作
  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
  );
}