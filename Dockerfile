# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
# Install deps (use ci for reproducibility)
COPY package*.json ./
RUN npm ci --include=dev
# Build the app
COPY . .
RUN npm run build

# --- Runtime stage ---
FROM nginx:1.27-alpine
# Copy build output to Nginx html dir
COPY --from=build /app/dist /usr/share/nginx/html
# Replace default server config with an SPA-friendly one
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
# Basic healthcheck
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost/ || exit 1