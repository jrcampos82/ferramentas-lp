// config do express
const express = require("express");
const app = express();
const port = 3000;

// deconding / enconding
app.use(express.urlencoded({ extended: true }));

const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];
/**
 * Configuração de rotas
 * GET, PUT, DELETE, POST
 */
app.get("/", (req, res) => {
  res.send("Meu Express está rodando...");
});

//products
app.get("/api", (req, res) => {
  // buscar em bd (respositorio)
  res.json(products);
});

app.post("/api", (req, res) => {
  let name = req.body.name;
  console.log(`Name iss ${name}`);
  // adicione o produto no array
  products.push({ id: products.length + 1, name: name });

  return res.json(products);
});

/**
 * Configuração da porta
 */
app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
