const express = require('express');
const app = express();
const port = process.env.APP_PORT;

app.listen(3000, () => {
  console.log("Rodando na porta 3000")
})




