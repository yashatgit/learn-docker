const express = require("express");
const app = express();
const port = 3000;

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

app.get("/isPrime", (req, res) => {
  const { number } = req.query;
  res.send(`${number} is ${isPrime(number) ? "Prime" : "not Prime"}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
