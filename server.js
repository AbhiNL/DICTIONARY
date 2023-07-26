const express = require('express')

const axios = require("axios")

const path =  require("path") 

const app = express()

const port = 3000

app.get('/SEARCH WORD', (req, res) => {

console.log(path.join(__dirname, 'public'))

return res.sendFile('public/index.html' ,  {root: __dirname});

})

app.get('/searchword', (req, res) => { 
  //res.send('Hello World! Harry') 
  console.log(req.params)

var options = {
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: {term: 'old'},
  headers: {
    'X-RapidAPI-Key': 'd75e7c1e7cmsh026ae874f58d05ep1bce6djsn5c34b7593ef7',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  res.json(response.data);
}).catch(function (error) {
  console.error(error);
 
});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}- http://localhost:3000`)
})
