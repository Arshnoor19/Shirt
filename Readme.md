# Shirt Designer Web App

This project is a web application that allows users to design virtual shirts in 3D, experiment with different colors and logos, and generate creative designs using OpenAI's DALL-E. The client side is built with Vite and React, utilizing three.js for 3D rendering. The server side is powered by Node.js and Express, with integration for cloudinary, mongoose, and OpenAI.

## Getting Started

To run the Shirt Designer Web App locally, follow the instructions below for both the client and server folders.

### Client

The client folder contains the frontend code for the Shirt Designer Web App. It is built with Vite and React, leveraging three.js for 3D modeling. Users can interactively customize shirts, change colors, add logos, and experiment with various design options.

#### Installation

Ensure you have Node.js and npm installed on your machine.

```bash
# Check for the Next.js 
npm install next -g

# Navigate to the client folder
cd client

# Install dependencies
npm install 

# Install additional packages
npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion

# Inside the client folder
cd client

# Start the development server
npm run dev
```

### Server
The project uses a RESTful API built with Express.js, which is served at `http://localhost:8080`
The server folder contains the backend code for the Shirt Designer Web App. It is built with Node.js and Express, integrating cloudinary for image handling, mongoose for database interaction, and OpenAI for creative logo generation.

Before running the server, create a .env file in the server folder and configure it appropriately.

In .env file type : OPEN_API_KEY = "Your Key"

#### Installation
```bash
# Navigate to the server folder
cd server

# Install dependencies
npm install -y

# Install additional packages
npm install cloudinary cors dotenv express mongoose nodeman openai
```