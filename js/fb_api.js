// page id: 211483252619589
// access token: EAAhhpQ4YeRIBAOQUZAwS5jAhl7vNMYija4s0gybsvZAlpyjZCOh9iuuzYpjkqmlZAk6SWbOsVDycKNMDZCR0xtvhZBd493TFGY29TKM2KuX2ZBtaprrS9ZCtao6187EeVnawCPXQli9MKI3xmSYHvW2PNvvvSbZCIfDuxPCDzGax1WiwJMkrfQWiU

// FB event image (I want to see when it expires) (created in 10/23 5:42pm)
// https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/72436160_778070729294169_557818330791018496_o.jpg?_nc_cat=104&_nc_oc=AQkCI7V5aeptXPevZOaNUAfFtGD-yPV3gv0RVA-DEdwQCxkrF7Ghk0ccbh-6FHFdiGQ&_nc_ht=scontent.xx&oh=4fb231e5caf8540404e43a3c61590388&oe=5E62AB92



function testFunction(callback) {
  const path = '';
  const method = '';
  const params = {};

  FB.api(
    '/211483252619589/events?fields=id,start_date,name,cover',
    'GET',
    {access_token: "EAAhhpQ4YeRIBAOQUZAwS5jAhl7vNMYija4s0gybsvZAlpyjZCOh9iuuzYpjkqmlZAk6SWbOsVDycKNMDZCR0xtvhZBd493TFGY29TKM2KuX2ZBtaprrS9ZCtao6187EeVnawCPXQli9MKI3xmSYHvW2PNvvvSbZCIfDuxPCDzGax1WiwJMkrfQWiU"
    },
    function(response) {
        console.log(response);
    }
  );
}


function displayEvents(events) {
  console.log(events);
}


function fetchPageEvents(callback) {
  // FB.ui({
  //   method: 'share',
  //   href: 'https://developers.facebook.com/docs/'
  // }, callback);
  FB.api();
}


window.fbAsyncInit = function() {
  FB.init({
    appId            : '2359161347668242',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v4.0'
  });
  testFunction(() => console.log('hi'));
};

