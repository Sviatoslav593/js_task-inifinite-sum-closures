'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(num1 = 0) {
  let sum = num1;
  let res = 0;

  const adder = (num2) => {
    if (num2 === undefined) {
      res = sum;
      sum = 0;

      return res;
    } else {
      sum += num2;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
