var point_feature = new ol.Feature({});
var point_geom = new ol.geom.Point(
    ol.proj.fromLonLat([12.306976, 47.990397])
);
point_feature.setGeometry(point_geom);

let source = new ol.source.Vector({
    features: [point_feature]
});

var vector_layer = new ol.layer.Vector({
    source: source
})


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([12.306976, 47.990397]),
        zoom: 20
    })
});

map.addLayer(vector_layer);

document.getElementById("add").onclick = function() {
    source.addFeature(point_feature);
}

document.getElementById("remove").onclick = function() {
    let feature = source.getFeatures()[0]
    source.removeFeature(feature);
}