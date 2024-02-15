import express from "express";
import { Watch } from "./watch.js";

const app = express();
const port = 3000;

const watch = new Watch();
console.log("Time is", watch.get_time());

app.use(express.static("public"));

app.get("/client.js", (req, res) => {
  res.sendFile(__dirname + "/client.js");
});

app.get("/time", (req, res) => {
  res.send(watch.get_time());
});

app.get("/toggleMode", (req, res) => {
  watch.on_mode_click();
  res.send();
});

app.get("/increaseTime", (req, res) => {
  watch.increment_time();
  res.send();
});

app.get("/toggleLight", (req, res) => {
  watch.on_light_click();
  res.send();
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
