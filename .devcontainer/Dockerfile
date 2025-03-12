FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Instala o cliente do PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

# Define o diretório de trabalho
WORKDIR /workspace

# Instala dependências
RUN npm install -g prisma
