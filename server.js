const express = require('express');
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () => {
    console.log("am I running?");
});