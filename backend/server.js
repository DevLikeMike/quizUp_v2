import express from "express";
import colors from "colors";

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`.yellow.bold);
});
