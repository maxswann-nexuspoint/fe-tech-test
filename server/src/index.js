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
    const page_query = parseInt(req.query.page) || 1;
    const results_per_page_query = parseInt(req.query.results_per_page) || 11;
    // const from_query = parseInt(req.query.page) || 0;

    const advert_classification_query = req.query.advert_classification || "All";
    const filePath = path.join(__dirname, 'mock-vehicle-search-response.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).json({ error: 'Failed to read data' });
        }

        try {
            const vehicleArray = JSON.parse(data);

            let totalNewCount = 0;
            let totalUsedCount = 0;
            
            // get counts for meta
            vehicleArray.forEach(vehicle => {
                if(vehicle.advert_classification === "New") {
                    totalNewCount++;
                } else if (vehicle.advert_classification === "Used") {
                    totalUsedCount++;
                }
            })

            let processedVehicleArray = vehicleArray;

            if(advert_classification_query === "New") {
                processedVehicleArray = processedVehicleArray.filter(vehicle => {
                    return vehicle.advert_classification === "New"
                })
            } else if(advert_classification_query === "Used") {
                processedVehicleArray = processedVehicleArray.filter(vehicle => {
                    return vehicle.advert_classification === "Used"
                })
            }

            let filteredTotal = processedVehicleArray.length;

            processedVehicleArray = processedVehicleArray.slice(
                ((page_query - 1) * results_per_page_query), 
                (page_query * results_per_page_query)
            )

            const jsonResponse = {
                data: processedVehicleArray,
                meta: {
                    "current_page": page_query,
                    "last_page": Math.ceil(filteredTotal / results_per_page_query),
                    "per_page": results_per_page_query,
                    "total": filteredTotal,
                    "all_total": vehicleArray.length,
                    "total_new_vehicles": totalNewCount,
                    "total_used_vehicles": totalUsedCount,
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