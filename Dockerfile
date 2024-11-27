# Use an official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you have one) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container (including `src` and `.env`)
COPY . .

# Copy the .env file into the container
COPY .env .env

# Expose the port that your server is running on (adjust port if needed)
EXPOSE 3000

# Command to run your app (assuming index.js is inside `src` folder)
CMD ["node", "src/server.js"]
