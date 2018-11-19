const Adagrams = {
  drawLetters() {
    const letter_pool = [
      ...'A'.repeat(9),
      ...'B'.repeat(2),
      ...'C'.repeat(2),
      ...'D'.repeat(4),
      ...'E'.repeat(12),
      ...'F'.repeat(2),
      ...'G'.repeat(3),
      ...'H'.repeat(2),
      ...'I'.repeat(9),
      ...'J'.repeat(1),
      ...'K'.repeat(1),
      ...'L'.repeat(4),
      ...'M'.repeat(2),
      ...'N'.repeat(6),
      ...'O'.repeat(8),
      ...'P'.repeat(2),
      ...'Q'.repeat(1),
      ...'R'.repeat(6),
      ...'S'.repeat(4),
      ...'T'.repeat(6),
      ...'U'.repeat(4),
      ...'V'.repeat(2),
      ...'W'.repeat(2),
      ...'X'.repeat(1),
      ...'Y'.repeat(2),
      ...'Z'.repeat(1),
    ];

    let hand = [];

    while (hand.length < 10) {
      // select a letter, randomly
      let rand_ind = Math.floor(Math.random() * letter_pool.length);
      let letter = letter_pool[rand_ind];

      // place letter into the hand (10x)
      hand.push(letter);

      // remove value from the letter pool so we only select a value once
      letter_pool.splice(rand_ind, 1);
    }
    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    let hand_copy = [];

    // create a deep copy of the hand
    for (let letter of lettersInHand){
      hand_copy.push(letter);
    }

    // loop thru input word (string
    for (let i=0; i < input.length; i++) {
      let letter = input[i]
      if (!hand_copy.includes(letter)) {
        return false
      }
      else {
        // remove valid input letters from hand (copy)
        let checked_index = hand_copy.indexOf(letter);
        hand_copy.splice(checked_index, 1);
      }
    }
    // if we made it thru without returning false, the input is valid
    return true
  },

  scoreWord(word) {
    const letter_scoring = {
      "A": 1,
      "B": 3,
      "C": 3,
      "D": 2,
      "E": 1,
      "F": 4,
      "G": 2,
      "H": 4,
      "I": 1,
      "J": 8,
      "K": 5,
      "L": 1,
      "M": 3,
      "N": 1,
      "O": 1,
      "P": 3,
      "Q": 10,
      "R": 1,
      "S": 1,
      "T": 1,
      "U": 1,
      "V": 4,
      "W": 4,
      "X": 8,
      "Y": 4,
      "Z": 10
    };

    let score_sum = 0;

    if (word.length > 6) {
      score_sum += 8;
    }

    for (let i=0; i < word.length; i++) {
      let letter = word[i].toUpperCase();
      score_sum += letter_scoring[letter];
    }

    return score_sum;
  },

  highestScoreFrom(words) {
    let winner = {
      word: words[0],
      // ugh tried to make this a function that calls winner.word, but it would return [Function: score]
      score: this.scoreWord(words[0])
    };

    let reassign_winner = function reassign_winner(word, score) {
      winner.word = word;
      winner.score = score;
    };

    for (let word_ind in words) {
      let word = words[word_ind];
      let word_score = this.scoreWord(word);

      if (word_score > winner.score) {
        reassign_winner(word, word_score);
      }

      if ( (word_score === winner.score) &&  (winner.word.length !== 10)) {
        if (word.length === 10 )  {
          reassign_winner(word, word_score);
        }
        else if (word_score === winner.score)  {
          reassign_winner(word, word_score);
        }

        }
      }

    return winner;
  }
};
// Do not remove this line or your tests will break!
export default Adagrams;
