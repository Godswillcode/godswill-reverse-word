
function reverseFunction(sentence){
  const wordsArray = sentence.split("");
  const reversedArray = wordsArray.reverse();
  const reversedSentence = reversedArray.join("")

  return reversedSentence;
}

module.exports = reverseFunction;
