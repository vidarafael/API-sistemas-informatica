import { app } from "./app";
import * as path from 'path';
require("dotenv").config({ path: path.resolve(__dirname, '../../../../.env') })

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started 🚀🚀")
})