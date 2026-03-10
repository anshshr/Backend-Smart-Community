import "dotenv/config.js";
import app from "./app.js";

const PORT =  3000;

app.listen(PORT, () => {
  console.log(`server is runing in the Port ${PORT}`);
});
