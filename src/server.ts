import express from 'express';

const app = express();


app.get('/', (req, res) =>{
  return res.json({
    message: 'Hello'
  });
});

app.post('/users', (req, res) =>{
  return res.json({message: "User saved!"})
});



app.listen(3333,() => console.log("Server is running"));