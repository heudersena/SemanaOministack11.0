const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const PORT = process.env.PORT || 3333;

// Require Initial.
const Routes = require("./Routes");

// Configução.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Routes);


// Iniciar o servidor nodeJS.
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Back-end run http://192.168.1.201:${PORT}`);
});