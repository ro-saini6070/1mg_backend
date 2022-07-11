const express = require("express");
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: ["http://localhost:3000"]
};
app.use(cors(corsOptions));

require("dotenv").config();
require('./routes/search')(app)
require('./db')

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));