require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection  = require("./db/config");
const userRotes = require("./routes/users");
const authRoutes = require("./routes/auth"); 

//database connection
connection();


//middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users", userRotes);
app.use("/api/auth", authRoutes);








const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}...`);
})

