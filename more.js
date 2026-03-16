let points = 0;

function checkGuess() {
  const puzzle = puzzles[currentPuzzleIndex];
  const guess = document.getElementById("playerGuess").value.toUpperCase().trim();

  if (!guess) return; // ignore empty guesses

  if (guess === puzzle.word) {
    // Correct answer
    points += 10; 
    document.getElementById("totalPoints").textContent = points;

    alert("🎉 Correct! +10 points");

    nextPuzzle();
  } else {
    // Wrong guess
    guesses--;
    if (guesses <= 0) {
      guesses = 0;
      showLoseMessage();
    }
    document.getElementById("counter").textContent = "Guesses left: " + guesses;
  }

  document.getElementById("playerGuess").value = "";
}

