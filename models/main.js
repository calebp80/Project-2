function initMap() {
    let options = {
        zoom: 4,
        center: {lat: 37.0902, lng: -95.7129},
    }
    let map = new.google.maps.Map(document.getElementById('map'), options);

    let markers = [
        {
            coords: { lat: 38.2106, lmg: -119.0171},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Bodie Cemetary: Los Angeles, CA'
        },
        {
            coords: {lat:38.2117, lng: -119.0113 },
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Gregory House Bridgeport, CA'
        },
        {
            coords: {lat: 34.1148, lng: -118.3747},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Bessies Love cabin Los Angeles, CA'
        },
        {
            coords: {lat: 34.1070, lng: -118.3759},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'The Comedy Store Los Angeles, CA'
        },
        {
            coords: {lat: 34.1045, lng: -118.3499},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Jean Harlows Westwood home Los Angeles, CA'
        },
        {
            coords: {lat: 34.1045, lng: -118.3499},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Nelson House Hollywood, CA'
        },
        {
            coords: {lat: 34.1028, lng: -118.3258},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'The Hollywood Pantages Theatre Hollywood, CA'
        },
        {
            coords: {lat: 34.1024, lng: -118.3258},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: ' The Hollywood Roosevelt Hotel  Hollywood, CA'
        },
        {
            coords: {lat: 34.1029, lng: -118.3271},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Club Avalon Hollywood, CA'
        },
        {
            coords: {lat: 36.5978, lng: -121.8976 },
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Colton Hall Museum Monterey, CA'
        },
        {
            coords: {lat: 36.5957, lng: -121.8900},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Presidio Chapel and Rectory Monterey, CA'
        },
        {
            coords: {lat: 32.7518, lng: -117.1932},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'El Camp Santo Cemetary San Diego, CA'
        },
        {
            coords: {lat: 32.7104, lng: -117.1614},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Horton Grand Hotel San Diego, CA'
        },
        {
            coords: {lat: 32.7204, lng: -117.1735},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Star of India San Diego, CA'
        },
        {
            coords: {lat: 38.7324, lng: -120.8086},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Bee Bennett Mansion Placerville, CA'
        },
        {
            coords: {lat: 38.7283, lng: -120.8025},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Cary House Hotel Placerville, CA'
        },
        {
            coords: {lat: 38.5760, lng: -121.4964},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Sacramento Library Sacramento, CA'
        },
        {
            coords: {lat: 38.5763, lng: -121.4978},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Stanford Mansion Sacramento, CA'
        },
        {
            coords: {lat: 35.3777, lng: -119.0215},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Fox Theater Bakersfield, CA'
        },
        {
            coords: {lat: 35.3923, lng: -119.0209},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Kern County Museum Pioneer Village Bakersfield, CA'
        },
        {
            coords: {lat: 37.7728, lng: -122.3025},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'The USS Hornet – Sea, Air, and Space Museum Alameda, CA'
        },
        {
            coords: {lat: 34.9049, lng: -117.0249},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Casa de Desierto Harvey House Museum Barstow, CA'
        },
        {
            coords: {lat: 37.7908, lng: -122.4125},
            iconImage: 'https://img.icons8.com/emoji/50/000000/ghost-emoji.png',
            content: 'Nob Hill Inn San Francisco, CA'
        }
    ];
    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
    function addMarker(props) {
        let marker = new.google.maps.Marker({
            position: props.coords,
            map: map,
        });
            if (props.iconImage) {
                marker.setIcon(props.content);
            }
            if (props.content) {
                let infoWindow = new google.maps.infoWindow({
                    content: props.content
                });
                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                });
            }
    }
}

function getMap() {
    resetPage();
    $.ajax({type: "GET",
            data: {
                apiKey: "AIzaSyBNb--wMAufjSpIIhVNFQMQ43AmTNdsfmI",
                q_track: SearchTerms,
                format: "jsonp",
                callback: "jsonp_callback",
                page_size: 50,
            },
            url: "https://localhost:3001",
            dataType: "jsonp",
            jsonpCallback: 'jsonp_callback',
            contentType: 'application/json'})
}

initMap();