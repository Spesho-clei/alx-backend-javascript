import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 1245;

app.use(express.json());

// Middleware to set dbFilePath
app.use((req, res, next) => {
  req.dbFilePath = process.argv[2];
  next();
});

// Use routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
