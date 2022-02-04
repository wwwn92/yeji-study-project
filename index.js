const express = require('express')
const app = express()
const port = 5000

const { User } = require("./models/User");
const bodyParser = require("body-parser");

//application/x-www-ofrm-urlenceoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://YeJiYoon:tlatms3375@yejistudy.yviqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    
}).then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) =>{
  
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  
  const user = new User(req.body)
  user.send((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})