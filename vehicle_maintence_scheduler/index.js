const express = require('express');
const { Log } = require('../logging_middleware/index'); 
const app = express();
app.use(express.json());

let vehicles = [];

app.post('/add-vehicle', async (req, res) => {
    const { vehicleId, lastServiceMileage, currentMileage } = req.body;

    
    const threshold = 5000;
    const needsMaintenance = (currentMileage - lastServiceMileage) >= threshold;

    const newVehicle = {
        vehicleId,
        status: needsMaintenance ? "Maintenance Required" : "Healthy",
        lastServiceMileage
    };

    vehicles.push(newVehicle);

    
    await Log("backend", "info", "controller", `Vehicle ${vehicleId} added to scheduler.`);

    res.status(201).json(newVehicle);
});


app.get('/get-schedule', async (req, res) => {
    await Log("backend", "info", "domain", "Fetching all vehicle maintenance schedules.");
    res.json(vehicles);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Scheduler running on http://localhost:${PORT}`);
});