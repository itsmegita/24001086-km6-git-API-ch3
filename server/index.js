const app = require("./appServer");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`APP is running on PORT : ${PORT}`);
});
