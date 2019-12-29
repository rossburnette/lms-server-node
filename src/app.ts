import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello world ${new Date()}`);
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on port ${port}`);
});
