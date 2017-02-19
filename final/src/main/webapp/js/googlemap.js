function initMap() {
    var mapCenter = new google.maps.LatLng(16.5449,81.5212);
    var mapOptions = {center: mapCenter, zoom:6};
    var mapCanvas = document.getElementById("googleMap");
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:mapCenter});
    marker.setMap(map);
    var infoWindow = new google.maps.InfoWindow({content:"Bhimavaram"});
    infoWindow.open(map, marker);
}