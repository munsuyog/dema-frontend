# Use the official Node.js image as the base image
FROM node:latest as dev

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npx", "next", "dev"]