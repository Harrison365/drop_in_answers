function add(obj, str) {
  obj.paidForTicket = Number(str);
  return obj;
}
console.log(add({ a: 1, b: 2 }, 4));
