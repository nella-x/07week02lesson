const flipCoin = () => {
  return new Promise((resolve, reject) => {
    let result = Math.random();
    if (result > 0.5) {
      resolve(
        "You seem to have luck on your side today! Here's some advice to make the most of it..."
      );
    } else {
      reject("Not your lucky day, but don't worry—tomorrow is a new chance!");
    }
  });
};

flipCoin()
  .then((message) => {
    console.log(message);
    return fetch("https://api.adviceslip.com/advice");
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Today's advice:", data.slip.advice);
  })
  .catch((error) => {
    console.log(error);
  });
