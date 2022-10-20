import React from 'react'
import useFetch from '../hooks/useFetch';
//import mapboxgl from 'mapbox-gl'

const MapEmbed = ({ lon, lat }) => {

    const { mapboxgl, isLoading } = useFetch('https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.1/mapbox-gl.js');

    console.log(mapboxgl);

    var apiKey = '7NUM6czbBohjAttAW33azMfHEGRTxAEF';

    var serviceUrl = 'https://api.os.uk/maps/raster/v1/wmts?request=getcapabilities&key=';

    var params = `&service=wmts&layer=Road_27700`

    // Create a map style object using the ZXY service.
    var style = {
        "version": 8,
        "sources": {
            "raster-tiles": {
                "type": "raster",
                "tiles": [ serviceUrl + apiKey + params ],
                "tileSize": 256,
                "maxzoom": 20
            }
        },
        "layers": [{
            "id": "os-maps-zxy",
            "type": "raster",
            "source": "raster-tiles"
        }]
    };

    // Initialize the map object.
    var map = new mapboxgl.Map({
        container: 'map',
        minZoom: 6,
        maxZoom: 19,
        style: style,
        maxBounds: [
            [ -10.76418, 49.528423 ],
            [ 1.9134116, 61.331151 ]
        ],
        center: [ -2.968, 54.425 ],
        zoom: 13
    });

    map.dragRotate.disable(); // Disable map rotation using right click + drag.
    map.touchZoomRotate.disableRotation(); // Disable map rotation using touch rotation gesture.

    // Add navigation control (excluding compass button) to the map.
    map.addControl(new mapboxgl.NavigationControl({
        showCompass: false
    }));

    

    return (
        <div className="map">
            {/* <iframe src={`https://maps.google.com/maps?q=${lat},${lon}&output=embed`}></iframe> */}
            <div id="map"></div>
        </div>
    )


}

export default MapEmbed 