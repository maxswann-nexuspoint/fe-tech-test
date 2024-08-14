import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send("Entry point to the Nexus Point tech test api. Call /vehicles for the full vehicle list");
})

app.get('/vehicles', (req, res) => {
    const filePath = path.join(__dirname, 'mock-vehicle-search-response.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).json({ error: 'Failed to read data' });
        }

        try {
            // const jsonData = JSON.parse(data);
            const vehicleArray = JSON.parse(data);

            const jsonResponse = {
                data: vehicleArray,
                meta: {
                    "current_page": 1,
                    "from": 1,
                    "last_page": 2,
                    "per_page": 11,
                    "total": 22,
                    "new_vehicles": 11,
                    "used_vehicles": 11,
                    "offer_vehicles": 0,
                }
            }
            res.json(jsonResponse);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).json({ error: 'Failed to parse data' });
        }
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})