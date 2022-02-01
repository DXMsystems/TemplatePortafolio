FROM node:17.4-alpine3.14

WORKDIR /app
COPY . .

RUN npm install ./my-app
RUN npm install ./back-end

EXPOSE 3000
EXPOSE 8000

CMD ["node", "./back-end/index.js"]