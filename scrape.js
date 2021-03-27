const axios = require('axios');
const cheerio = require('cheerio');

axios.get('http://hauntedhouses.com/').then(response => {
    const $ = cheerio.load(response.data);


$('nav.main-navigation').each((i, element) => {
    const link = $(element)
        .find('a')
        .attr('href'); 

        console.log(link);
    });
});

    //first working on image url
//     $('li.menu-item-type-taxonomy').each((i, element) => {
//         const link = $(element)
//         .find('a')
//         .attr('href');

//         console.log(link);

//     });
// });

//const h3 = $('h3.component-map--header').text();
//const path = $('path.state js-state').text();