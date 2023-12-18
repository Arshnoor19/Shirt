// Import necessary modules
import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables from a .env file
dotenv.config();

// Create an Express router
const router = express.Router();

// Create a configuration object with the OpenAI API key
const config = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAI(config);

// Define a route for handling GET requests at '/'
router.route('/').get((req, res) => {
  // Respond with a simple JSON message
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

// Define a route for handling POST requests at '/'
router.route('/').post(async (req, res) => {
  try {
    // Extract the 'prompt' property from the request body
    const { prompt } = req.body;

    // Make an asynchronous request to the OpenAI API to create an image
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    // Extract the base64-encoded image from the API response
    const image = response.data.data[0].b64_json;

    // Respond with the base64-encoded image in a JSON object
    res.status(200).json({ photo: image });
  } catch (error) {
    // Handle errors by logging to the console and responding with a 500 status
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Export the router for use in other parts of the application
export default router;
