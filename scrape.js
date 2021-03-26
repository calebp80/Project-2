const axios = require('axios');
const cheerio = require('cheerio');

axios.get('http://hauntedhouses.com/').then(response => {
    const $ = cheerio.load(response.data);


    //first working on image url
    $('li.menu-item-type-taxonomy').each((i, element) => {
        const link = $(element)
        .find('a')
        .attr('href');

        console.log(link);

    });
});

// const urlElems = $('h2.featured-posts--info')
//for (let i = 0; i < link.length; i++)
//   c 


//const h3 = $('h3.component-map--header').text();
//const path = $('path.state js-state').text();