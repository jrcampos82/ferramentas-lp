// config do express
const express = require("express");


const app = express();
const port = 3000;

// deconding / enconding
app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => {
  res.send("Meu Express está rodando...");
});





/**
 * Configuração da porta
 */
app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
