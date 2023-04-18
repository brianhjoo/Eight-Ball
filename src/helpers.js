
function getRandom(answers) {
  const randidx = Math.floor(Math.random() * answers.length);

  return answers[randidx];
}


export default getRandom;