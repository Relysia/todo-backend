const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// middlewarre
app.use(express.json());
app.use(cors({ origin: "https://relysia.art" }));

const fs = require("fs").promises;
app.get("/api/todo", async (req, res) => {
  const response = await fs.readFile("./data.json");
  res.json(JSON.parse(response));
});

app.post("/api/todo", async (req, res) => {
  await fs.writeFile("./data.json", JSON.stringify(req.body));
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
// // lowdb initialization
// const adapter = new FileSync("db.json");
// const db = low(adapter);
// db.defaults({ data: [] }).write();

// app.get("/", (req, res) => {
//   res.send("<h1>Relysia Todo Backend Api</h1>");
// });

// app.get("/api/todo", (req, res) => {
//   const response = db.get("data").value();
//   res.json(response);
// });

// app.post("/api/todo", (req, res) => {
//   console.log(req.body);
//   db.get("data")
//     .push(req.body)
//     .last()
//     .write()
//     .then((post) => res.send(post));
// });
