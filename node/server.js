const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/isPrime", (req, res) => {
  const { number } = req.query;
  res.send(`${number} is ${isPrime(number) ? "Prime" : "not Prime"}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
