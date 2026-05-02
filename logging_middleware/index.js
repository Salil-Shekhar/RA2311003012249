const axios = require('axios');

/**

 * @param {string} stack - "Yahan pe backedn limenge"
 * @param {string} level - "info", "warn", "error", or "fatal"
 * @param {string} pkg - "cache", "controller", "cron_job", "db", or "domain"
 * @param {string} message 
 */
async function Log(stack, level, pkg, message) {
    const url = 'http://20.207.122.201/evaluation-service/logs'; //
    
    // Constraints: Fields must be lowercase
    const body = {
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message: message
    };

    try {
        await axios.post(url, body, {
            headers: {
                // The bearer token jo liye the Auth ke smaaya me 
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzczI1NTBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDM4MiwiaWF0IjoxNzc3Njk5NDgyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZWM1ZjdhMmEtOTFiMy00NzgwLWIyY2QtZDg5NWRkOWQyNmZiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2FsaWwgc2hla2hhciIsInN1YiI6IjJmOWYyMGEwLTY3MzYtNGIyMi04ODkzLTgxNDljOTdhMDVkZSJ9LCJlbWFpbCI6InNzMjU1MEBzcm1pc3QuZWR1LmluIiwibmFtZSI6InNhbGlsIHNoZWtoYXIiLCJyb2xsTm8iOiJyYTIzMTEwMDMwMTIyNDkiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiIyZjlmMjBhMC02NzM2LTRiMjItODg5My04MTQ5Yzk3YTA1ZGUiLCJjbGllbnRTZWNyZXQiOiJIbWhDc0hta3l2amJ6cWZDIn0.BxU10FtUBytR76WGkAnrhHRpkDhVm-dyQ89CoCZesos' 
            }
        });
        console.log("Log sent successfully");
    } catch (error) {
        console.error("Failed to send log:", error.response ? error.response.data : error.message);
    }
}

module.exports = { Log };