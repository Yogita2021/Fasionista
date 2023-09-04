const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const app = express();
const cors = require("cors");
app.use(express.json());
// swagger doc

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fashionista Project Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const specification = swaggerJsdoc(options);
//
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specification));

app.use(cors());
require("dotenv").config();
const { auth } = require("./backend/middleware/auth");
const { connection } = require("./backend/database/db");
const { userRoute } = require("./backend/routes/user.route");
const { productRoute } = require("./backend/routes/product.route");

app.use("/users", userRoute);
// app.use(auth);
app.use("/product", productRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected  to  database");
  } catch (err) {
    console.log("Not Connected to database");
    console.log(err);
  }
  console.log("server is running at port 3030");
});

module.exports = app;
