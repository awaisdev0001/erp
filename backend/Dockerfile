# Use Node.js 20.9.0 image
FROM node:20.9.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the app
COPY . .

# Expose backend port
EXPOSE 8888

# Start the server
CMD ["yarn", "setup"]
CMD ["yarn", "start"]
