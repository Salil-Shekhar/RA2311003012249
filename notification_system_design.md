
Notification System Design
1. Executive Summary
This document outlines the architecture for a Vehicle Maintenance Scheduler integrated with a centralized Logging Middleware. The system is designed to monitor vehicle health metrics and ensure observability through standardized logging to a remote evaluation server.

2. System Architecture
The system follows a microservices-inspired modular design:

Vehicle Maintenance Scheduler (Core App): A RESTful API that accepts vehicle data, processes maintenance logic (mileage-based thresholds), and returns status updates.

Logging Middleware (Reusable Package): A standalone module that intercepts application events and handles the complexity of external API communication, including JWT authentication and data normalization.

External Evaluation Server: The destination for all system logs, requiring specific header formats and body constraints.

3. Data Flow
Input: A user sends a POST request to /add-vehicle with vehicleId, lastServiceMileage, and currentMileage.

Processing: The Scheduler calculates if the difference exceeds the 5,000 km threshold.

Logging: Regardless of the outcome, the Scheduler calls the Log() function from the middleware.

Transmission: The Middleware formats the log into the required schema (stack, level, package, message), attaches the JWT Bearer Token, and sends it to the remote log endpoint.

4. Security & Compliance
Authentication: All outgoing requests to the evaluation service are secured using JSON Web Tokens (JWT) passed in the Authorization header as a Bearer token.

Data Normalization: To meet server-side validation, the middleware automatically converts stack, level, and package values to lowercase before transmission.

5. Production Standards
Error Handling: Implemented try-catch blocks in the middleware to prevent logging failures from crashing the main application.

Modularity: The logging logic is kept separate from the business logic, allowing it to be reused across different folders (e.g., vehicle_maintence_scheduler and notification_app_be).