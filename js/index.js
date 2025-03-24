function initMap() {
    var local = { lat: -7.612895, lng: -72.674245 };
    var map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 14,
        center: local
    });

    var marker = new google.maps.Marker({
        position: local,
        map: map,
        title: "Cooperativa Coopsul"
    });
}
