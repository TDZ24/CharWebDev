const express = require("express");
const apiRoutes = require("./routes/routes");

const app = express();
 
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoutes);

app.listen(PORT, () => {console.log("El puerto es: " + PORT)});