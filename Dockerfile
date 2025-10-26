# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runtime
WORKDIR /app

# Install a static file server (prod dep only)
RUN npm i -g serve

# Copy build output only
COPY --from=build /app/dist ./dist

EXPOSE 8090
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost:8090/ || exit 1

# --single ensures SPA fallback to index.html
CMD ["serve", "dist", "--single", "--listen", "8090"]
