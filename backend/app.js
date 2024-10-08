// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
