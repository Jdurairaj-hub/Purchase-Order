const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const path = require("path");

// Routers
const partsRouter = require('./routes/parts');
const poRouter = require('./routes/pos');
const findposRouter = require('./routes/findpos');
const preparePoRouter = require('./routes/preparePo')
const submitPoRouter = require ('./routes/submitPo')

app.use("/parts", partsRouter);
app.use("/pos", poRouter);
app.use("/findpos", findposRouter);
app.use('/preparePo', preparePoRouter);
app.use('/submitPo', submitPoRouter);

app.use(express.json());
const _dirname = path.dirname("")
const buildpath = path.join(_dirname, "../client/build")
app.use(express.static(buildpath));
app.use(
    cors({
        "origin": "*",
    })
);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server running on port 3001");
    });
});
