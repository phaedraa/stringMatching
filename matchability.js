function matchability(stringOne, stringTwo) {
  stringOne = stringOne.toLowerCase();
  stringTwo = stringTwo.toLowerCase();
  var orderedStr = getMaxAndMinStrings();
  var matchWithIndex = 0;
  var matchNoIndex = 0;
  var maxStringRemain = '';
  var minLen = orderedStr.min.length;
  var minStrHash = {};
  
  for (var i = 0; i < minLen; i++) {
    if (orderedStr.min[i] === orderedStr.max[i]) {
      matchWithIndex++;
    } else {
			augmentMinStrHash(orderedStr.min[i], i);
      maxStringRemain += orderedStr.max[i];
    }
  }

  maxStringRemain += orderedStr.max.slice(minLen);
  getMatchNoIndex(minStrHash, maxStringRemain);

  return [matchWithIndex, matchNoIndex];

  function getMaxAndMinStrings() {
  	if (stringOne.length > stringTwo.length) {
      return { max: stringOne, min: stringTwo };
  	}
  	return { max: stringTwo, min: stringOne };
  }

  function augmentMinStrHash(letterMin, idx) {
  	if (minStrHash.hasOwnProperty(letterMin)) {
      minStrHash[letterMin].push(idx);
    } else {
      minStrHash[letterMin] = [idx];
    }
  }

  function getMatchNoIndex(minStrHash, maxString) {
    for (var j = 0; j < maxString.length; j++) {
      var letter = maxString[j];
      if (minStrHash.hasOwnProperty(letter) && minStrHash[letter].length > 0) {
        matchNoIndex++;
        minStrHash[letter].pop();
      }
    }
  }
}

module.exports = matchability;