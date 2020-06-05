const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Express - Body Middleware
app.use(express.json());

// Environment Variables
const dotenv = require('dotenv');
dotenv.config({path: "./config.env"});

// MongoDB Connection
const connectDatabase = require('./helpers/db');
connectDatabase();

const router = require("./routes/index");
app.use("/api", router);

const PORT = process.env.PORT;
const dev = process.env.NODE_ENV;

//Error Handler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT} ${dev}`));