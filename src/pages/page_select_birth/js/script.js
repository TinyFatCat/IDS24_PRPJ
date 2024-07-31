//code reference by sumikim, re-write by me
//https://codepen.io/malonmiming/pen/dypJOdr?editors=0010

//플러스, 마이너스, 카운터 숫자 불러오기
const countAdd = document.querySelector('#increase');
const countSub = document.querySelector('#decrease');
const num1 = document.querySelector('#count-slot1');
const num2 = document.querySelector('#count-slot2');
const countBirth = document.querySelector('#updateBirth');

//더하기, 빼기 연산
const calcAdd = (num) => {
  if (num == 0) {
    num = num1;
  } else {
    num = num2;
  }
  let count = Number(num.textContent);
  count = count + 1;
  if (count > 9) {
    count = 0;
  }
  num.textContent = count;
};

const calcSub = (num) => {
  if (num == 0) {
    num = num1;
  } else {
    num = num2;
  }
  let count = Number(num.textContent);
  count = count - 1;
  if (count < 0) {
    count = 9;
  }
  num.textContent = count;
};

const countResult = (a, b, countBirth) => {
  let countA = String(a.textContent);
  let countB = String(b.textContent);
  let result = Number(countA + countB);
  countBirth = result;
  console.log(result);
  return;
};
