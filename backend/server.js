const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "..", "frontend");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicDir));

app.post("/api/computation", (req, res) => {
  res.redirect(303, "/thank-you.html?type=computation");
});

app.post("/api/viewing", (req, res) => {
  res.redirect(303, "/thank-you.html?type=viewing");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Luisa Corral website running at http://localhost:${PORT}`);
});
