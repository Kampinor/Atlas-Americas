// 1. Initialize the map
        // Coordinates: [Latitude, Longitude], Zoom level: 13
//Todo calculate
var map = L.map('map').setView([18.1, -89.81 ], 13);

// 2. Add a Tile Layer (OpenStreetMap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors'}).addTo(map);

// 3. Add a Marker
var marker = L.marker([18.105612, -89.810328]).addTo(map);
marker.bindPopup("<b>Hello!</b><br>This is Calakmul.").openPopup();