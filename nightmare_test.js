var Nightmare = require('nightmare'),
  nightmare = Nightmare({
    show: true
  });


async function run (sites_array) {
    for (let site_num = 0; site_num < sites_array.length; site_num++){
        console.time('timer');
        console.log(sites_array[site_num]);
        await nightmare
            .goto(sites_array[site_num])
            .wait('body');
        console.timeLog('timer');
    }
    await nightmare.end();
};

run(websites);

const websites = [
    'https://www.facebook.com/',
    'https://twitter.com/',
    'https://www.google.com/',
    'https://www.instagram.com/',
    'https://www.linkedin.com/',
    'https://www.pinterest.ca/',
    'https://www.wikipedia.org/',
    'https://wordpress.com/',
    'https://www.blogger.com/about/',
    'https://www.apple.com/',
    'https://www.adobe.com/',
    'https://www.tumblr.com/',
    'https://www.amazon.com/',
    'https://vimeo.com/',
    'https://www.flickr.com/',
    'https://www.microsoft.com/en-ca/',
    'https://ca.yahoo.com/?p=us',
    'https://www.godaddy.com/',
    'https://www.reddit.com/',
    'https://soundcloud.com/',
    'https://www.paypal.com/ca/home',
    'https://www.yelp.com/',
    'https://www.imdb.com/',
    'https://www.huffingtonpost.com/',
    'https://www.wix.com/',
    'https://www.dropbox.com/',
    'https://www.etsy.com/',
    'https://www.ebay.com/',
    'https://www.twitch.tv/',
    'https://www.bing.com/',
    'https://medium.com/',
];