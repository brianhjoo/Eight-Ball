/**takes in answers array of objects and returns random object */
function getRandom(answers) {
  const randidx = Math.floor(Math.random() * answers.length);

  return answers[randidx];
}


export default getRandom; //better to not be default