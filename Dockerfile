FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY .. .

ENV PORT=3002
ENV MONGO_URI=mongodb+srv://raul92:1234@mircroservice-node-curs.sob0btt.mongodb.net/?retryWrites=true&w=majority&appName=Mircroservice-Node-Curso
EXPOSE 3002

CMD ["npm", "start"]