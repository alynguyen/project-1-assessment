let totalNum = 0;
// let btnValue = document.getElementById('inp').value;
let totalMsg = document.getElementById('num-display');
totalMsg.innerHTML = `${totalNum}`;
document.getElementById('btn-add').addEventListener('click', addTotal);
document.getElementById('btn-sub').addEventListener('click', subTotal);

function msgColor() {
  if (totalNum < 0) {
    totalMsg.style.color = 'red';
  } else {
    totalMsg.style.color = 'black';
  }
}

function addTotal() {
  btnValue = parseInt(document.getElementById('inp').value);
  totalNum += btnValue;
  totalMsg.innerHTML = `${totalNum}`;
  msgColor();
}

function subTotal(num) {
  btnValue = parseInt(document.getElementById('inp').value);
  totalNum -= btnValue;
  totalMsg.innerHTML = `${totalNum}`;
  msgColor();
}