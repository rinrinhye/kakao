const countNumber = document.querySelector('.count-number');

const numbers = Array.from(document.querySelectorAll('.number')).slice(0, 8);

const num = 60194399;

const numArray = num.toString().split('');

/* 

숫자 하나가 0부터 9까지 돈 다음
카운트 숫자 로 가야함

0부터 0까지 도는 건 디폴트

*/
// let count = 0;

// count.forEach((number, i) => {
//   let counting = setInterval(() => {
//     number++;
//     count++;
//     if (count < 10) {
//       numbers[i].innerHTML = count;
//     }
//     if (count >= 10) {
//       numbers[i].innerHTML = count.toString().substring(1);
//       if (count.toString().substring(1) == numArray[i]) {
//         clearInterval(counting);
//       }
//     }
//   }, 10);
// });

/* ----------------------------------- */
/* setInterval--------------------------- */

numbers.forEach((number, index) => {
  setTimeout(() => {
    counting(number, index);
  }, index * 100);
});

function counting(number, index) {
  let count = 0;
  let plus = setInterval(() => {
    count++;
    if (count < 10) {
      number.innerHTML = count;
    } else if (count >= 10) {
      number.innerHTML = count.toString().substring(1);
      if (count.toString().substring(1) === numArray[index]) {
        clearInterval(plus);
      }
    }
  }, 30);
}

if (numArray.length > 0) {
  q = ~~(numArray.length / 3);
  r = numArray.length % 3;
  const span = document.createElement('span');
  span.innerHTML = ',';
}

/* ----------------------------------- */

// let counting = setInterval((i) => {
//   count[i]++;
//   if (count[i] < 10) {
//     numbers[i].innerHTML = count[i];
//   }
//   if (count[i] >= 10) {
//     numbers[i].innerHTML = count[i].toString().substring(1);
//     if (count[i].toString().substring(1) == numArray[i]) {
//       clearInterval(counting);
//     }
//   }
// }, 10);

// let counting = setInterval(() => {
//   count[0]++;
//   if (count[0] < 10) {
//     numbers[0].innerHTML = count[0];
//   }
//   if (count[0] >= 10) {
//     numbers[0].innerHTML = count[0].toString().substring(1);
//     if (count[0].toString().substring(1) == numArray[0]) {
//       clearInterval(counting);
//     }
//   }
// }, 10);

// let counting1 = setInterval(
//   () => {
//     count[1]++;
//     if (count[1] < 10) {
//       numbers[1].innerHTML = count[1];
//     }
//     if (count[1] >= 10) {
//       numbers[1].innerHTML = count[1].toString().substring(1);
//       if (count[1].toString().substring(1) == numArray[1]) {
//         clearInterval(counting1);
//       }
//     }
//   },
//   10,
//   10
// );

// let count = [0, 0, 0, 0, 0, 0, 0, 0];

// let counting = setInterval(() => {
//   numbers.forEach((number, index) => {
//     count[index]++;
//     number.innerHTML = count[index];
//     if (count[index].toString().substring(1) == numArray[index]) {
//       clearInterval(counting);
//     }
//     console.log(count[index]);
//     console.log(numArray[index]);
//     // clearInterval(counting);
//     console.log(numArray);
//   });
// }, 100);
