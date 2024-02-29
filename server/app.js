import express from 'express';
import productRoute from './src/routes/productRoute.js';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());
app.use('/products', productRoute);

app.listen(port, () => {
  console.log(`app running on port:  ${port}`);
});

export default app;
