const https = require("https");
function SendMessageWhatsApp(data){
    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/136332466219118/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAJwvrz1ZAPYBOx6hjW3bLKQTz3jBIGCSK27gdqyXpEmlzRScL4amxbPnsEazsHNpofDDQ8KLyWZBJDyWo1Xo8ZAWOqkev1fBuwZBWdndjpnBQaoTlWAGvvAlZAlO6xF1yNpNV7E0vTIL8dJr54Jvzc3k0QBZAeFf5ZAZASxytKvbkGhvcBub8peLgX2Q20Hk0DK"
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