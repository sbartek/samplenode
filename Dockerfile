FROM node:13
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]
