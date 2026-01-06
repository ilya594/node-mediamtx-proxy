import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const API = "http://mediamtx:8889/v3";

app.post("/camera/start", async (_, res) => {
  const r = await fetch(`${API}/paths/add/camera`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "rtsp://admin:dima_password_0@192.168.1.105:554/cam/realmonitor?channel=1&subtype=1",
      sourceOnDemand: true
    })
  });
  res.json(await r.json());
});

app.get("/camera/status", async (_, res) => {
  const r = await fetch(`${API}/paths/get/camera`);
  res.json(await r.json());
});

app.listen(process.env.PORT || 3000);