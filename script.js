const jokes = [ " How do you generate a random string ? Put a windows user in front of Vim and tell them to exit." ]
  
  const jokeElement = document.getElementById("joke");
  const charCountElement = document.getElementById("char-count");
  const generateJokeBtn = document.getElementById("generate-joke-btn");
  
  function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    
    jokeElement.textContent = randomJoke;
    charCountElement.textContent = randomJoke.length;
  }
  
  generateJokeBtn.addEventListener("click", getRandomJoke);