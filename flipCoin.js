const flipCoin = () => {
  return new Promise((resolve, reject) => {
    let result = Math.random();
    if (result > 0.5) {
      resolve("You won the coin flip! Let's get some advice...");
    } else {
      reject("You lost the coin flip. No advice for you today!");
    }
  });
};

const getAdviceAfterCoinFlip = async () => {
  try {
    const result = await flipCoin();
    console.log(result);

    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.slip) {
      throw new Error("Invalid response format from API");
    }

    console.log("Advice:", data.slip.advice);
  } catch (error) {
    console.log("Error:", error);
  }
};

getAdviceAfterCoinFlip();
