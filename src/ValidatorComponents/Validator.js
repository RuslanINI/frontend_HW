export const validator = () => {
  let bracket = "({[]})";

  console.log(bracket.length);
  let count = 0;
  for (let i = 0; i < bracket.length; i++) {
    if ((bracket[i] === "(", bracket[i] === "[", bracket[i] === "{")) {
      count++;
    }
    if ((bracket[i] === ")", bracket[i] === "]", bracket[i] === "}")) {
      count--;
    }
    if (count < 0) {
      break;
    }
  }

  if (count !== 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};
