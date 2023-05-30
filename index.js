const express = require('express');
const app = express();
const videosRoutes = require('./routes/videos');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

app.use(express());

app.use(cors({
  origin: 'http://localhost:3000' // Replace with your desired origin
}));

app.use(express.static('public'));

app.use('/videos', videosRoutes);

// home route
app.get('/', (req, res) => {
  console.log('SHE WORK');
  res.send('HE WORK');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
