const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(require("./routes/brands.route"));
app.use(require("./routes/products.route"));

app.listen(PORT, () => {
  console.log("Сервер успешно запущен на порту " + PORT);
});
