import path from "path";
import fs from "fs";
import express, { Express } from "express";
import { renderPage } from "./components/SSR";
import { createStore } from "./redux";
import { getDogPic } from "./redux/thunks/dogs";
import { thunkAsync } from "./redux/server/thunkAsync";

const publicDir = path.resolve(__dirname, "..", "public");
const html = fs.readFileSync(path.resolve(publicDir, "index.html"), 'utf8');

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDir, { index: false }));

app.get("/", async (req, res) => {
  const store = createStore();
  await thunkAsync(store, getDogPic());
  res.send(renderPage(req.url, html, store));
});

app.get("/about", async (req, res) => {
  res.send(renderPage(req.url, html));
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
