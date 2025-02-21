const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use environment port or 3000

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example POST endpoint (for receiving data)
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});