

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
center: coord, // starting position [lng, lat]
zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({color:"red"})
.setLngLat(coord)
.setPopup(
  new mapboxgl.Popup({offset:25}).setHTML(
    "Exact locaion provided after booking"
  )
)
.addTo(map);