const express = require('express');
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const productsRoute = require("./routes/products");
const adminRoute = require("./routes/admin");

dotenv.config();
const port = process.env.PORT || 5000

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/products", productsRoute);
app.use("/api/admin", adminRoute);

app.listen(port, () => {
    console.log('Listening on port ' + port);
})