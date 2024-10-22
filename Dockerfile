# Etapa 1: Utilizar uma imagem base oficial do Node.js
FROM node:18-alpine

# Etapa 2: Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Etapa 3: Copiar o package.json e o package-lock.json
COPY package*.json ./

# Etapa 4: Instalar as dependências
RUN npm install

# Etapa 5: Copiar o restante dos arquivos do projeto para o container
COPY . .

# Etapa 6: Expor a porta que o app usará (por padrão, a 3000)
EXPOSE 3001

# Etapa 7: Definir o comando de inicialização da aplicação
CMD ["npm", "start"]
