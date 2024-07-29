import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors
import authRoutes from './routes/auth.js';
import cartRoutes from './routes/cart.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors()); // Use cors middleware
app.use(express.json());

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined in .env file');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
