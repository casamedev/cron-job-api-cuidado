const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

cron.schedule('30 23 * * *', async () => {
    console.log('Running a task every minute');

    try {
        // Load environment variables
        const API_USERNAME = process.env.API_USERNAME;
        const API_PASSWORD = process.env.API_PASSWORD;

        if (!API_USERNAME || !API_PASSWORD) {
            throw new Error('API username or password not provided');
        }

        // Make GET request with basic authentication
        const response = await axios.get('https://cuidado-api-production.up.railway.app/api/seed/all', {
            auth: {
                username: API_USERNAME,
                password: API_PASSWORD
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error occurred during HTTP request:', error.message);
    }
});
