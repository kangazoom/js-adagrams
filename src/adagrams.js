const Adagrams = {
  drawLetters() {
    const letter_pool = [
      ...'a'.repeat(9),
      ...'b'.repeat(2),
      ...'c'.repeat(2),
      ...'d'.repeat(4),
      ...'e'.repeat(12),
      ...'f'.repeat(2),
      ...'g'.repeat(3),
      ...'h'.repeat(2),
      ...'i'.repeat(9),
      ...'j'.repeat(1),
      ...'k'.repeat(1),
      ...'l'.repeat(4),
      ...'m'.repeat(2),
      ...'n'.repeat(6),
      ...'o'.repeat(8),
      ...'p'.repeat(2),
      ...'q'.repeat(1),
      ...'r'.repeat(6),
      ...'s'.repeat(4),
      ...'t'.repeat(6),
      ...'u'.repeat(4),
      ...'v'.repeat(2),
      ...'w'.repeat(2),
      ...'x'.repeat(1),
      ...'y'.repeat(2),
      ...'z'.repeat(1),
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
  }







  
};

// Do not remove this line or your tests will break!
export default Adagrams;
