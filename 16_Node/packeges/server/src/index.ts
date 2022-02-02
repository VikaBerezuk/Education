import express from 'express';
import path from "path";

const server = express();
const PORT = 3000;

server.use(express.static('./../web/dist'));
server.get('/', (req, response) => {
    response.sendFile(path.resolve(path.resolve(), 'static', './../../web/dist/index.html'));
    response.status(200);
});


server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});