const axios = require('axios');
const cheerio = require('cheerio');

axios.get('http://hauntedhouses.com/').then(response => {
    const $ = cheerio.load(response.data);

    $('div.item').each((i, element) => {
        const link = $(element)
            .find('div.url')
            //.attr('url');

        console.log(link);

    });
});

// const urlElems = $('h2.featured-posts--info')
//   for (let i = 0; i < urlElems.length; i++) 


//const h3 = $('h3.component-map--header').text();
//const path = $('path.state js-state').text();