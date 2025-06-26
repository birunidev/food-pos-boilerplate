# Build stage
FROM node:18 AS builder

WORKDIR /app

# Install deps and build
COPY package*.json ./
COPY .env .env
RUN npm install
COPY . .
RUN npm run build

# Production stage with nginx
FROM nginx:stable-alpine

# Set custom port
ENV PORT=3000

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]