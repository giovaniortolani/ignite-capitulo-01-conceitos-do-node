// por padrão ele faz o require do index.js, porém preferi especificar verbosamente que é de lá para mais fácil entendimento.
// A ordem utilizada para resolver o módulo é: package.json, index.js, ou index.node.
const app = require("./index");

const port = 3333;
app.listen(port, () => {
  console.log(`[server.js] > app listening at port ${port}`);
});
