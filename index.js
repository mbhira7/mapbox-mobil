mapboxgl.accessToken = 'pk.eyJ1IjoiYmhpcmE3IiwiYSI6ImNrNTNsdWk3MjA5eXIza21ncmtqbnB2M2cifQ.GtnTmv9p_McKIpj2W9ZbxA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});


const followMe = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;

    map.flyTo({
        center:[lng,lat],
        zoom:18
    })

    const marker = new mapboxgl.Marker()
    marker.setLngLat([lng,lat])
    marker.addTo(map)
}

navigator.geolocation.watchPosition(followMe);

