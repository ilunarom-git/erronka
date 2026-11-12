const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dashboard de Servicios</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 40px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        header {
          text-align: center;
          color: white;
          margin-bottom: 50px;
        }

        h1 {
          font-size: 3em;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
          font-size: 1.2em;
          opacity: 0.9;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #333;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .icon {
          font-size: 3em;
          margin-bottom: 15px;
        }

        .card-title {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 10px;
          color: #667eea;
        }

        .card-desc {
          font-size: 0.95em;
          color: #666;
          margin-bottom: 15px;
          flex-grow: 1;
        }

        .card-port {
          font-size: 0.85em;
          background: #f0f0f0;
          padding: 8px 12px;
          border-radius: 6px;
          color: #999;
          margin-bottom: 10px;
        }

        .btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 25px;
          border: none;
          border-radius: 6px;
          font-size: 0.95em;
          cursor: pointer;
          transition: opacity 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .btn:hover {
          opacity: 0.9;
        }

        .footer {
          text-align: center;
          color: white;
          margin-top: 40px;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2em;
          }

          .grid {
            gap: 15px;
          }

          .card {
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <h1>🚀 Dashboard de Servicios</h1>
          <p class="subtitle">Accede a todos tus servicios desde aquí</p>
        </header>

        <div class="grid">
          <a href="http://localhost:8443" target="_blank" class="card">
            <div class="icon">💻</div>
            <div class="card-title">Code Server</div>
            <div class="card-desc">VS Code en el navegador</div>
            <div class="card-port">Puerto: 8443</div>
            <button class="btn">Abrir →</button>
          </a>

          <a href="http://localhost:9000" target="_blank" class="card">
            <div class="icon">🐳</div>
            <div class="card-title">Portainer</div>
            <div class="card-desc">Gestión de contenedores Docker</div>
            <div class="card-port">Puerto: 9000</div>
            <button class="btn">Abrir →</button>
          </a>

          <a href="http://localhost:8081" target="_blank" class="card">
            <div class="icon">👤</div>
            <div class="card-title">Whoami</div>
            <div class="card-desc">Muestra tu petición HTTP</div>
            <div class="card-port">Puerto: 8081</div>
            <button class="btn">Abrir →</button>
          </a>

          <a href="http://localhost:8082" target="_blank" class="card">
            <div class="icon">🌐</div>
            <div class="card-title">MiWeb</div>
            <div class="card-desc">Tu página web personal</div>
            <div class="card-port">Puerto: 8082</div>
            <button class="btn">Abrir →</button>
          </a>

          <a href="http://localhost:8083" target="_blank" class="card">
            <div class="icon">🗄️</div>
            <div class="card-title">Adminer</div>
            <div class="card-desc">Gestor de bases de datos</div>
            <div class="card-port">Puerto: 8083</div>
            <button class="btn">Abrir →</button>
          </a>

          <a href="http://localhost:3001" target="_blank" class="card">
            <div class="icon">📊</div>
            <div class="card-title">Uptime Kuma</div>
            <div class="card-desc">Monitoreo de servicios</div>
            <div class="card-port">Puerto: 3001</div>
            <button class="btn">Abrir →</button>
          </a>
        </div>

        <div class="footer">
          <p>📦 Todos los servicios corriendo en Docker</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Dashboard corriendo en http://localhost:8080');
});
