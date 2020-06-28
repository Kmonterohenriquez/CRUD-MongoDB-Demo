const express = require("express"),
  uri =
    "mongodb+srv://kwmh:kwmh1997@cluster0-rc12e.mongodb.net/mydb?retryWrites=true&w=majority",
  app = express(),
  mongoose = require("mongoose"),
  exercisesRouter = require("./routes/exercises"),
  usersRouter = require("./routes/users");

app.use(express.json());
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log(`MongoDB database connection established successfully!`);
});

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter)
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
