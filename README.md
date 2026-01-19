<h1 align='center'>
  🦈steamShark API
</h1>

<p align='center'>
  <a href="https://github.com/sponsors/alexandresanlim"><img alt="version" src="https://img.shields.io/badge/Version-2.0.0-blue" /></a>
  &nbsp;
  <a href="https://github.com/sponsors/alexandresanlim"><img alt="Sponsor" src="https://img.shields.io/badge/Opensource-green" /></a>
</p>
<br />

A React + Vite frontend for SteamShark website.

## 🚀 Development

```bash
npm install
npm run dev
```

App runs at [http://localhost:8080](http://localhost:8080)

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 🐳 Docker

### Dockerfile

To build and run with Dockerfile:

```bash
docker build -t steamshark-web .
docker run -p 8090:8090 steamshark-web
```

Visit [http://localhost:8090](http://localhost:8090)

### Docker compose

You can simply run
```bash
docker compose up --build -d
```
Visit [http://localhost:8090](http://localhost:8090)