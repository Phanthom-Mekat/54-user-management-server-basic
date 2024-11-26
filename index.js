const express = require('express')
const cors = require('cors');
const app = express();
const port =process.env.PORT || 5000;

// middlewere
app.use(cors())
app.use(express.json())


const users=[
    {id:1,name:'John Smith',email:'john.smith@gmail.com'},
    {id:2,name:'Doe Jane',email:'doe.jane@gmail.com'},
    {id:3,name:'Bob Brown',email:'bob.brown@gmail.com'},
    {id:4,name:'Alice Cooper',email:'alice.cooper@gmail.com'},
    {id:5,name:'Mike Davis',email:'mike.davis@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('User management server running')
})

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('Server hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id= users.length+1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port,()=>{
    console.log(`server is running port,${port}`)
})