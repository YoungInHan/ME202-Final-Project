var https = require("https");
var fs = require("fs");

for (let site_num = 0; site_num < 1; site_num++) {
    var options = {
        hostname: site_array[site_num],
        port: 443,
        method: "GET"
    };
    var req =  https.request(options, function(res) {
        var responseBody = "";
        console.time('timer');
        console.log("response from server has started");
        console.log(`Server Status: ${res.statusCode}`);
        console.log("Response Headers: %j", res.headers);

        res.setEncoding("UTF-8");

        res.once("data", function(chunk){
            console.log(chunk);
        });

        res.on("data", function(chunk) {
            console.log(`--chunk-- ${chunk.length}`);
            responseBody += chunk;
        });

        res.on("end", function(){
            console.log(site_array[site_num])
            console.log(responseBody)
            console.timeLog('timer');
        });
    });
    req.on("error", function(err){
        console.log(`Problem with request: ${err}`);
    });
    req.end();
}

const site_array = [
    'www.facebook.com',
    'twitter.com',
    'www.google.com',
    'www.instagram.com',
    'www.linkedin.com',
    'www.pinterest.ca',
    'www.wikipedia.org',
    'wordpress.com',
    'www.blogger.com',
    'www.apple.com',
    'www.adobe.com',
    'www.tumblr.com',
    'www.amazon.com',
    'vimeo.com',
    'www.flickr.com',
    'www.microsoft.com',
    'ca.yahoo.com',
    'www.godaddy.com',
    'www.reddit.com',
    'soundcloud.com',
    'www.paypal.com',
    'www.yelp.com',
    'www.imdb.com',
    'www.huffingtonpost.com',
    'www.wix.com',
    'www.dropbox.com',
    'www.etsy.com',
    'www.ebay.com',
    'www.twitch.tv',
    'www.bing.com',
    'medium.com',
];