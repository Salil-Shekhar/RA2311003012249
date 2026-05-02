const axios = require('axios');

/**
 * @param {string} stack - "backend" or "frontend"
 * @param {string} level - "info", "warn", "error", or "fatal"
 * @param {string} pkg - "cache", "controller", "cron_job", "db", or "domain"
 * @param {string} message 
 */
async function Log(stack, level, pkg, message) {
    const url = 'http://20.207.122.201/evaluation-service/logs';

    const body = {
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message: message
    };

    try {
        await axios.post(url, body, {
            headers: {
                // FIX: Added the "Bearer " prefix before the token string
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzczI1NTBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDY2MywiaWF0IjoxNzc3NzAzNzYzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWVjNmFjMTQtNmM4NS00YWVjLWEzOTctYmUzNzhlZmRhZjdhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2FsaWwgc2hla2hhciIsInN1YiI6IjJmOWYyMGEwLTY3MzYtNGIyMi04ODkzLTgxNDljOTdhMDVkZSJ9LCJlbWFpbCI6InNzMjU1MEBzcm1pc3QuZWR1LmluIiwibmFtZSI6InNhbGlsIHNoZWtoYXIiLCJyb2xsTm8iOiJyYTIzMTEwMDMwMTIyNDkiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiIyZjlmMjBhMC02NzM2LTRiMjItODg5My04MTQ5Yzk3YTA1ZGUiLCJjbGllbnRTZWNyZXQiOiJIbWhDc0hta3l2amJ6cWZDIn0.z4UNuF5u1iuZ0Gk-qiPNpzsoajDftwZlH5-j7F28CI0' 
            }
        });
        console.log("Log sent successfully");
    } catch (error) {
        // Detailed error logging to help you debug during the test
        console.error("Failed to send log:", error.response ? error.response.data : error.message);
    }
}

module.exports = { Log };