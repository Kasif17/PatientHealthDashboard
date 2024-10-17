const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patientRoutes');
const authRoutes = require('./routes/authRoutes');
const authorizationRoutes = require('./routes/authorizationRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/authorizations', authorizationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
