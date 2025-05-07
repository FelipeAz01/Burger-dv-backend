import app from './index.js'; // Certifique-se que está assim

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.APP_PORT || 3001;

app.listen(port, () => console.log(`Server is running at port ${port}...`));
