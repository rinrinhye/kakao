const countNumberWrap = document.querySelector('.count-number');
const targetNumber = 60194399;
const targetNumberArray = targetNumber.toString().split('');

// <span> 0 </span> 을 타겟 넘버 숫자 개수만큼 만들기
const numberSpanArray = targetNumberArray.map(() => {
  const numberSpan = document.createElement('span');
  numberSpan.innerHTML = 0;

  return numberSpan;
});

// countNumberWrap 자식으로 삽입
numberSpanArray.forEach((span) => {
  countNumberWrap.appendChild(span);
});

// 쉼표 삽입
if (targetNumberArray.length > 3) {
  const length = targetNumberArray.length;
  const q = Math.floor(length / 3);

  const numberSpans = countNumberWrap.querySelectorAll(`span`);

  for (let i = 1; i <= q; i++) {
    const index = i * 3 - 1;
    if (index < length) {
      numberSpans[index].before(',');
    }
  }
}

// 숫자 count up
function counting(span, index) {
  let count = 0;

  const plus = setInterval(() => {
    count++;
    span.innerHTML = count < 10 ? count : count.toString().substring(1);

    if (count >= 10) {
      if (count.toString().substring(1) === targetNumberArray[index]) {
        clearInterval(plus);
      }
    }
  }, 30);
}

// count 시작
export function countingStart() {
  numberSpanArray.forEach((span, index) => {
    span.innerHTML = 0;
    setTimeout(() => {
      counting(span, index);
    }, index * 100);
  });
}

countingStart();
