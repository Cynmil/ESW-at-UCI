// page id: 211483252619589
// access token: none

function testFunction(callback) {
  const path = '';
  const method = '';
  const params = {};

  FB.api(path, method, params, callback);
}


function displayEvents(events) {
  console.log(events);
}


function fetchPageEvents(callback) {
  FB.ui({
    method: 'share',
    href: 'https://developers.facebook.com/docs/'
  }, callback);
}


// window.fbAsyncInit = function() {
//   FB.init({
//     appId            : '2359161347668242',
//     autoLogAppEvents : true,
//     xfbml            : true,
//     version          : 'v4.0'
//   });
//   testFunction(() => console.log('hi'));
// };