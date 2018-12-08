const express = require ('express');
const app = express();
app.use(express.static('public'));

app.get ('/', (req, res)=> {
  res.sendFile('public/index.html', { root: __dirname });
});

const server = app.listen(8080, () => {
  console.log('Express running; PORT ${server.address().port}');
});
