import http from 'http';
import { app } from './app.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
}).on('error', error => {
    console.log(`Error server: ${error}`);
}) ;