# Multi-stage: сборка статики Astro + отдача через nginx.

FROM node:20-slim AS build
WORKDIR /build
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Метка сборки: по ней деплой проверяет, что контейнер реально пересобрался,
# а не остался на старом образе (.git внутрь не копируется, отсюда build-arg).
ARG GIT_SHA=unknown
RUN npm run build && printf '%s' "$GIT_SHA" > dist/build-id

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist /usr/share/nginx/html
EXPOSE 80
