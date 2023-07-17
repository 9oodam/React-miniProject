const express = require("express");
const path = require("path");
const cors = require("cors"); // front & back 연결
const session = require("express-session");
const dot = require("dotenv").config();
const cookieParser = require('cookie-parser');

const {sequelize} = require("./models");


// router
const signupRouter = require("./routers/signupRouter");
const loginRouter = require("./routers/loginRouter");
const boardRouter = require("./routers/boardRouter");

const app = express();


// localhost 포트번호와 연결
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));

// 쿠키 파서
app.use(cookieParser());


// body-parser 사용
app.use(express.urlencoded({extended : false}));
app.use(express.json());
// session 사용
app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}));

// sequelize 연결
sequelize.sync({force : false}).then((e) => {
    console.log("Sequelize 연결 성공")
}).catch((err) => {
    console.log(err);
});


// router 연결
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/board", boardRouter);


app.listen(8080, () => {
    console.log("server opened");
});