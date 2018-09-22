function getGeoLocation (callback) {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(callback, handleGeoError)
}
function handleGeoError (error) {
  console.log(error)
  switch (error.code) {
    case error.PERMISION_DENIED:
      popup('User denied the request for Geolocation.', 'error'); break;
    case error.POSITION_UNAVAILABLE:
      popup('Location information is unavailable.', 'error'); break;
    case error.TIMEOUT:
      popup('The request to get user location timed out.', 'error'); break;
    case error.UNKNOWN_ERROR:
      popup('An unknown error occurred.', 'error'); break;
  }
}
function showGeoLocation (location) {

}
