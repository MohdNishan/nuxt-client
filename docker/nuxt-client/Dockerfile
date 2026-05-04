# Usa una imagen base de Node.js
FROM node:22

# Instala Git
RUN apt-get update && apt-get install -y git

# Establece el directorio de trabajo
WORKDIR /usr/src/app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# --- NEW: UI theme build argument ---
# Accepted values: 'default' (brown), 'blue'
ARG NUXT_UI_THEME=default
ENV NUXT_UI_THEME=${NUXT_UI_THEME}

# Copy source — now always from the single merged UI folder
COPY ./nuxt-client-ui/ ./

# Copy package files and env
COPY package*.json ./
COPY ./docker/nuxt-client/env_nuxt.sample ./.env

# Instala las dependencias
RUN npm install --omit=dev

# Build the project (NUXT_UI_THEME is available here via ENV)
RUN pwd && ls -ailtr && npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar el servidor en producción
# CMD ["node", ".output/server/index.mjs"]
CMD ["npm", "run", "start"]