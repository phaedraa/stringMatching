var matchability = require("../matchability.js");

describe("Matchability function", function() {
	var data = [
   	getTestData(['abc', 'abc'], [3, 0]),
    getTestData(["abc", "abc"], [3, 0]),
    getTestData(["bca", "abc"], [0, 3]),
    getTestData(["aab", "abb"], [2, 0]),
    getTestData(["aab", "aba"], [1, 2]),
    getTestData(["abc", "aaa"], [1, 0]),
    getTestData(["abccddppbk", "acbp"], [1, 3]),
    getTestData(["acbp", "abccddppbk"], [1, 3]),
    getTestData(["", ""], [0, 0]),
    getTestData(["", "aaa"], [0, 0]),
    getTestData(["aaa", ""], [0, 0]),
  ];
  
  for (var k = 0; k < data.length; k++) {
    var output = matchability(data[k].input[0], data[k].input[1]);
    testMatchability(output, data[k].output)
  }
  
  function getTestData(input, output) {
    return { input: input, output: output };
  }

  function testMatchability(calculated, expected) {
  	it('Return expected result', function() {
    	expect(calculated[0]).toEqual(expected[0]);
    	expect(calculated[1]).toEqual(expected[1]);
    });
  }
});
