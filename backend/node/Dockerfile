FROM node:9-slim 

#WORKDIR specifies the application directory 
WORKDIR /app 
COPY package.json /app
RUN npm install 
RUN npm install mysql 
COPY . /app 
CMD ["npm", "start"]
