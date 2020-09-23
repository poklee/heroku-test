import express from 'express';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req : any, res : any) => res.send('Hello World from GitHub!'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));