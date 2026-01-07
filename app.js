import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 10000;
const MTX = process.env.MEDIAMTX_API;

app.get('/health', async (req, res) => {
  try {
    const r = await fetch(`${MTX}/v3/paths/list`, {
      headers: { Accept: 'application/json' }
    });
    const data = await r.json();
    res.json({ mediamtx: 'ok', paths: data.items.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Node.js listening on ${PORT}`);
});