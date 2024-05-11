const express = require("express");
const app = express();
const userModel = require("./users");

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hello world");
});

/*
app.get("/login", async (req, res) => {
    
    const user = await userModel.create({
        name: "b",
        email: "b@gmail.com",
    });
res.send(user);

});
*/


app.get("/find", async (req, res) => {

    const finduser = await userModel.find();

res.send(finduser);
});

app.get("/findOneAndDelete", async (req, res) => {
    const findOneAndDelete = await userModel.findOneAndDelete({email: "b@gmail.com"});

    res.send(findOneAndDelete);
})

app.get("/findOneandUpdate",async(req,res)=>{
    
    const findOneandUpdate = await userModel.findOneAndUpdate({email: "a@gmail.com"},{password: "c"});
    res.send(findOneandUpdate);
})

app.listen(3000, () => {
    console.log("jay shree ram");
})


