

Vehicle Maintenance & Notification System
This repository contains a production-grade Vehicle Maintenance Scheduler and a reusable Logging Middleware developed as part of a backend evaluation. The system calculates maintenance requirements based on vehicle mileage and communicates logs to a centralized evaluation server using secure JWT authentication.

🚀 Features
Automated Scheduler: Evaluates vehicle health based on a 5,000 km mileage threshold.

Modular Logging Middleware: A standalone package for standardized logging across multiple services.

Secure Communication: Implements JWT Bearer Token authorization for all external API calls.

Standardized Observability: Ensures all log parameters (stack, level, package) are normalized to lowercase per system requirements.

🛠️ Project Structure
vehicle_maintence_scheduler/: Express.js application handling the core business logic.

logging_middleware/: Reusable logic for sending authorized logs to the evaluation server.

notification_system_design.md: Detailed architectural design and data flow documentation.

assets/: Implementation proof and screenshots of the working system.

🚦 Getting Started
Prerequisites
Node.js (v14 or higher)

npm

Installation
Clone the repository:

Bash
git clone https://github.com/Salil-Shekhar/RA2311003012249.git

2. Navigate to the scheduler directory:
   ```bash
   cd vehicle_maintence_scheduler
Install dependencies:

Bash
npm install
Running the Application
Start the scheduler server:

Bash
node index.js
The server will start on http://localhost:3000.

🧪 API Usage
Add Vehicle / Check Maintenance
Endpoint: POST /add-vehicle

Payload:

JSON
{
  "vehicleId": "V-101",
  "lastServiceMileage": 10000,
  "currentMileage": 16000
}
Success Response:

Status: 201 Created

Terminal Output: Log sent successfully

📸 Implementation Proof
Evidence of successful integration with the evaluation service logs and API responses can be found in the output/ folder.
