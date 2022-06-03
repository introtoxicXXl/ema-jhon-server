const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();


//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('jhon is running waiting for ema')
})
app.listen(port,()=>{
  console.log('success',port);
})