const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get("", (req, res) => {
    const htmlContent = '<html><body><h1>Checking the code</h1></body></html>';
    res.status(200).send(htmlContent);
})

// uniform resource identifier 
var uri = "mongodb+srv://aryankoundal:lHKDAlmlT7KvRQP0@clustername-cluster0.cupcng4.mongodb.net/";
mongoose.connect(uri, { useUnifiedTopology: true, dbName: "ci-cd-aws" });

app.listen(3000, () => console.log('Server running on port 3000'));
