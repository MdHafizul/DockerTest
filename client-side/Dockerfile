# Use Nginx to serve the static files
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the static files to the Nginx HTML directory
COPY . .

# Expose the default Nginx port
EXPOSE 80
