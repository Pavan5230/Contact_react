const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const db = mysql.createPool({
        host:"localhost",
        user:"root",
        password:"mysql123",
        database:"cruddb"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get",(req,res)=>{
    const sqlSelect = "select * from contactdetails";
    db.query(sqlSelect,(error,result)=>{
        //  if(error) res.send(error);
        res.send(result);
    })
})

app.post("/api/post",(req,res)=>{
    const {name,email,contact}=req.body;
    const sqlInsert ="insert into contactdetails(name,email,contact) VALUES (?,?,?)"
    db.query(sqlInsert,[name,email,contact],(error,result)=>{
        console.log("error:",error)
        console.log("result:",result)
    })
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})