const express=require('express')
const student=require('./data/students')
const app=express();


const port = 3003;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
app.get('/',(req,res)=>{
    res.send("hello world");
})
app.get('/api/students',(req,res)=>{
    res.json(student);
});
