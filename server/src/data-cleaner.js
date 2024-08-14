/**
 * Used to edit the mock-vehicle-search-response.json for easier bulk updates
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'mock-vehicle-search-response.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const vehicleArray = JSON.parse(data);

        // Update vehicle_id for each vehicle in the array
        vehicleArray.forEach((vehicle, index) => {
            vehicle.vehicle_id = index;
        });

        // const formatNumber = (num) => {
        //     if (num >= 1000) {
        //         return (num / 1000).toFixed(0) + 'k';
        //     }
        //     return num.toString();
        // }

        // const getRandFeatures = () => {
        //     const randomFeatures = [
        //         "Bluetooth",
        //         "Cruise Control",
        //         "MP3",
        //         "Automatic Headlights",
        //         "AC\/Climate",
        //         "Isofix",
        //         "Alloys"
        //     ]

        //     return randomFeatures.filter((feature) => {
        //         return Math.random() > 0.8;
        //     })
        // }

        // vehicleArray = vehicleArray.map(vehicle => {
        //     return {
        //         ...vehicle,
        //         // advert_classification: Math.random() > 0.5 ? "New" : "Used", 
        //         // key_features: [
        //         //     `${formatNumber(vehicle.odometer_value)} ${vehicle.odometer_units}`,
        //         //     vehicle.fuel_type,
        //         //     vehicle.transmission,
        //         //     vehicle.body_type,
        //         //     ...getRandFeatures()
        //         // ],
        //         // monthly_payment: (vehicle.price / 24).toFixed(2),
        //         // monthly_finance_type: "PCP"
        //     }
        // })

        // Write the updated array back to the file
        fs.writeFile(filePath, JSON.stringify(vehicleArray, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing the file:', writeErr);
                return;
            }
            console.log('File has been updated successfully.');
        });

        return;
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});