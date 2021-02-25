function initMap() {
	// register our API key
	L.mapquest.key = 'uZ8X42IQd7oIiMcsVGvLpAYMtZCTKUPr';

	// set up our map
	var map = L.mapquest.map('map', {
		center: [32.87874553885033, -117.23592891753651],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// add a market (UCSD) to the map
	L.marker([32.88, -117.236]).addTo(map);
}