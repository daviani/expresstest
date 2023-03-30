const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <html lang="en">
      <body>
        <h1>Welcome to my website!</h1>
 
      </body>
    </html>
  `);
});

app.post('/', (req, res) => {
  const data = req.body;
  console.log('Received data: ', data);
  res.status(201).send({ message: 'Data has been created' });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
