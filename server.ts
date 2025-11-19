import { createServer, IncomingMessage, ServerResponse } from 'node:http';

const port = process.env.PORT;

if (!port) {
  throw new Error('PORT environment variable is required');
}

const PORT: number = Number(port);

const server = createServer((req: IncomingMessage, res: ServerResponse): void => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(PORT, (): void => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
