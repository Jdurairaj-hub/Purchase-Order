const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const partsRouter = require('./routes/parts');
const poRouter = require('./routes/pos');
const findposRouter = require('./routes/findpos');
const preparePoRouter = require('./routes/preparePo');
const submitPoRouter = require('./routes/submitPo');

const _dirname = path.dirname("")
const buildPath = path.join(__dirname, "../client/build");

app.use(express.static(buildPath));

app.get("/*", function(req, res){
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
    );
});

app.use("/parts", partsRouter);
app.use("/pos", poRouter);
app.use("/findpos", findposRouter);
app.use('/preparePo', preparePoRouter);
app.use('/submitPo', submitPoRouter);

db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
});
