const connecttoMongo = require("./db.js")
const express = require("express")
const app = express();
require('dotenv').config();
const port = process.env.PORT
const cors = require("cors")
connecttoMongo()

app.use(cors())
app.use(express.json())

app.use("/api/auth", require("./routes/auth.js"));

app.listen(port, () => {
  try {
    console.log(`Server listening at http://localhost:${port}`);
  } catch (error) {
    console.error(error);
  }
})