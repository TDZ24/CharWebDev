const https = require("https");
function SendMessageWhatsApp(data){
    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/106627949207338/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAEORpCVxZAEBOyEIZB0TsFZBXLYIqeoWZCvNcOuDNs8TMrYFZBW1bBZBDOGmqLyumWpzi1aF8meYQc4898dbVThzArkOxozIo4y2ZAyzCSXe9AgZAejZCwK1FIyCdOB36tFOpkrYm8vp8pEGqVD2eTHaeRMWZAZBvOvh1EFVSorNPPpZAoMm4raHSKa0hMrJ2M2ff45"
        }
    };

    const req = https.request(options, (res) => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};