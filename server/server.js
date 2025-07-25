const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/api/auth');
const noticeRoutes = require('./routes/api/notices');
const projectRoutes = require('./routes/api/projects');
const userRoutes = require('./routes/api/users');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config({ path: '../.env' });

// Validate environment variables
const requiredEnv = ['MONGO_URI', 'JWT_SECRET', 'JWT_EXPIRES_IN', 'PORT'];
const missingEnv = requiredEnv.filter(key => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(`Error: Missing required environment variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}


// Connect to database
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(express.json());

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);


// Global error handler (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});