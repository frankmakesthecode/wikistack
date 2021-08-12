const express = require("express");
const morgan = require("morgan");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");
const { db, Page, User } = require("./models");
const layout = require("./views/layout");

const app = express();

// Some basic middleware
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/wiki", wikiRouter);

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const init = async () => {
  await db.sync({ force: true });
};

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listning on port ${PORT}!`);
});
