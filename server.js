const express = require('express');
const routes = require("./controllers");
const sequelize = require('./config/connection');
// Keep the item below in mind - if you don't CALL the models folder to just generate thge tables, they will never be made.
const models = require('./models');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("am I running?");
    });
});
