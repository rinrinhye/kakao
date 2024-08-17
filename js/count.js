const countNumberWrap = document.querySelectorAll('.count-number');
const targetNumber = 60194399;
const targetNumberArray = targetNumber.toString().split('');

let numberSpanArray = [];

for (let i = 0; i < targetNumber.toString().length; i++) {
  const numberSpan = document.createElement('span');
  numberSpan.innerHTML = 0;
  numberSpanArray = [...numberSpanArray, numberSpan];
}

for (let i = 0; i < numberSpanArray.length; i++) {
  countNumberWrap.forEach((countNumber) => {
    countNumber.appendChild(numberSpanArray[i]);
  });
}

if (targetNumberArray.length > 3) {
  const length = targetNumberArray.length;
  const q = ~~(length / 3);
  const r = length % 3;
  const span = document.createElement('span');
  span.innerHTML = ',';

  if (q > 0 && r !== 0) {
    for (let i = 1; i <= q; i++) {
      countNumberWrap.forEach((countNumber) => {
        const span = countNumber.querySelector(`span:nth-last-child(${i * 3})`);
        span.before(',');
      });
    }
  } else if (q > 0 && r === 0) {
    for (let i = 1; i < q; i++) {
      countNumberWrap.forEach((countNumber) => {
        const span = countNumber.querySelector(`span:nth-last-child(${i * 3})`);
        span.before(',');
      });
    }
  }
}

function counting(number, index) {
  let count = 0;
  let plus = setInterval(() => {
    count++;
    if (count < 10) {
      number.innerHTML = count;
    } else if (count >= 10) {
      number.innerHTML = count.toString().substring(1);
      if (count.toString().substring(1) === targetNumberArray[index]) {
        clearInterval(plus);
      }
    }
  }, 30);
}

function countingStart() {
  numberSpanArray.forEach((number, index) => {
    number.innerHTML = 0;
    setTimeout(() => {
      counting(number, index);
    }, index * 100);
  });
}

countingStart();
