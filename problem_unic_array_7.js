var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let ans = [];

for (let i = 0; i < numbers.length; i++) {
  let flag = false;  
  for (let j = 0; j < ans.length; j++) {
    if (numbers[i] === ans[j]) {
      flag = true;  
      break;
    }
  }
  
  if (!flag) {
    ans.push(numbers[i]);  
  }
}

console.log(ans);  