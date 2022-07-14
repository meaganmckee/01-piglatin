const translate = (word) => {
  word = word.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];

  if (vowels.indexOf(word[0]) >= 0) {
    return word + "way";
  }
};

module.exports = { translate };
