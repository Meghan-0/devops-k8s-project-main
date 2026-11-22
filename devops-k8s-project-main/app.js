const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Cloud-Native K8s Demo</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 10%; background-color: #0d1117; color: #c9d1d9; }
          h1 { color: #58a6ff; }
          .status { color: #3fb950; font-weight: bold; font-size: 1.2rem; }
        </style>
      </head>
      <body>
        <h1>Cloud-Native DevOps Application</h1>
        <p class="status">Containerized with Docker & Deployed on Kubernetes!</p>
        <p>Container Hostname: <strong>${os.hostname()}</strong></p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});