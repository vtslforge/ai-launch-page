import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Default route → index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
