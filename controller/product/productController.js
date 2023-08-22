//products
app.get("/api", (req, res) => {
  // buscar em bd (respositorio)
  res.json(products);
});

app.get("/api/:id", (req, res) => {
  // recebe o param id
  res.send("ID = " + req.params.id); // exibe o param id
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id); // falta de converter em number (pode acontecer problem)

  const product = products.find((p) => p.id === id);

  // if (!product) return res.status(404).send("Product not found!");
  if (!product)
    return res.status(404).json({
      status: 404,
      message: "Product not found!",
    });

  res.json(product);
});

app.post("/api", (req, res) => {
  let name = req.body.name;
  console.log(`Name iss ${name}`);
  // adicione o produto no array
  products.push({ id: products.length + 1, name: name });

  return res.json(products);
});

/**
 * FUNCAO UPDATE
 */
app.put("/api/products/:id", (req, res) => {
  // let name = req.body.name
  let { name } = req.body;
  let id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product)
    return res.status(404).json({
      status: 404,
      message: "Product not found!",
    });

  products[id].name = name;

  return res.json(products[id]);
});
/**
 * DELETE FUNCTION
 */
app.delete("/api/products/:id", (req, res) => {
  let id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product)
    return res.status(404).json({
      status: 404,
      message: "Product not found!",
    });

  products = products.filter((p) => p.id !== id);

  return res.json({
    status: 204,
    message: "Product deleted!",
  });
});