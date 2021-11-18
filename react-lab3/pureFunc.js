const arr = [1, 2];

function doubleArr(arr) {
  const arr1 = arr.map((x) => x * x);
  return console.log(arr1);
}

doubleArr(arr);

const obj = {
  x: 1,
};
function addName(obj) {
  const objNew = Object.assign({}, obj);
  objNew.name = "Hoang";
  return objNew;
}
