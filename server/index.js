const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/models', require('./routes/models'));
app.use('/api/routes', require('./routes/routes'));
app.use('/api/services', require('./services/services'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
