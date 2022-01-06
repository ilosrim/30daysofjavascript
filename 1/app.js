const newFunc = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

const isLandscape = (width, height) => {
  return width > height;
};

console.log(isLandscape(132, 65));
localStorage