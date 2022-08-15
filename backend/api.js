const express = require("express");

const app = express();
// npm i cookie parser
const cookieParser = require("cookie-parser");
// jsonwebtoken
const jwt = require("jsonwebtoken");
const secrets = require("./secrets");
// token name is -> JWT & mechanism -> cookies
// repersent -> collection
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

// to  add post body data to req.body
app.use(express.json());
// add cookies to req.cookies
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

// locahost:3000 -> express API 
app.listen(3000, function () {
    console.log("server started at port 3000");
})