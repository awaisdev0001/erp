# Use Node.js 20.9.0 image
FROM node:20.9.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the app
COPY . .

# Build the React app
RUN yarn build

# Expose the default port
EXPOSE 3000

# Start the app
CMD ["yarn", "run", "dev"]

