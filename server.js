const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (req,res, next) => {
  res.sendFile(__dirname, '/client', 'build', 'index.html');
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })

  module.exports = app;