var wms_layers = [];

var format_StateMap_0 = new ol.format.GeoJSON();
var features_StateMap_0 = format_StateMap_0.readFeatures(json_StateMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateMap_0.addFeatures(features_StateMap_0);
var lyr_StateMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StateMap_0, 
                style: style_StateMap_0,
                interactive: true,
    title: 'State Map<br />\
    <img src="styles/legend/StateMap_0_0.png" /> 158340391 - 20205125364 <br />\
    <img src="styles/legend/StateMap_0_1.png" /> 20205125364 - 106802728188 <br />\
    <img src="styles/legend/StateMap_0_2.png" /> 106802728188 - 144661267977 <br />\
    <img src="styles/legend/StateMap_0_3.png" /> 144661267977 - 212886221680 <br />\
    <img src="styles/legend/StateMap_0_4.png" /> 212886221680 - 1478839695958 <br />'
        });
var format_CountyMapCOVID_1 = new ol.format.GeoJSON();
var features_CountyMapCOVID_1 = format_CountyMapCOVID_1.readFeatures(json_CountyMapCOVID_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyMapCOVID_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyMapCOVID_1.addFeatures(features_CountyMapCOVID_1);
var lyr_CountyMapCOVID_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountyMapCOVID_1, 
                style: style_CountyMapCOVID_1,
                interactive: true,
    title: 'County Map COVID<br />\
    <img src="styles/legend/CountyMapCOVID_1_0.png" /> Very Low<br />\
    <img src="styles/legend/CountyMapCOVID_1_1.png" /> Low<br />\
    <img src="styles/legend/CountyMapCOVID_1_2.png" /> Middle<br />\
    <img src="styles/legend/CountyMapCOVID_1_3.png" /> High<br />\
    <img src="styles/legend/CountyMapCOVID_1_4.png" /> Very High<br />'
        });
var format_StateBoundary_2 = new ol.format.GeoJSON();
var features_StateBoundary_2 = format_StateBoundary_2.readFeatures(json_StateBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_2.addFeatures(features_StateBoundary_2);
var lyr_StateBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StateBoundary_2, 
                style: style_StateBoundary_2,
                interactive: true,
                title: '<img src="styles/legend/StateBoundary_2.png" /> State Boundary'
            });

lyr_StateMap_0.setVisible(true);lyr_CountyMapCOVID_1.setVisible(true);lyr_StateBoundary_2.setVisible(true);
var layersList = [lyr_StateMap_0,lyr_CountyMapCOVID_1,lyr_StateBoundary_2];
lyr_StateMap_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEOIDN': 'GEOIDN', });
lyr_CountyMapCOVID_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEOID2': 'GEOID2', 'GEOID': 'GEOID', });
lyr_StateBoundary_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEOIDN': 'GEOIDN', });
lyr_StateMap_0.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'GEOIDN': 'Range', });
lyr_CountyMapCOVID_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'GEOID2': 'TextEdit', 'GEOID': 'TextEdit', });
lyr_StateBoundary_2.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'GEOIDN': 'Range', });
lyr_StateMap_0.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'inline label', 'STUSPS': 'no label', 'NAME': 'inline label', 'LSAD': 'inline label', 'ALAND': 'inline label', 'AWATER': 'inline label', 'GEOIDN': 'no label', });
lyr_CountyMapCOVID_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'AFFGEOID': 'no label', 'NAME': 'inline label', 'LSAD': 'no label', 'ALAND': 'inline label', 'AWATER': 'no label', 'GEOID2': 'no label', 'GEOID': 'no label', });
lyr_StateBoundary_2.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'inline label', 'STUSPS': 'no label', 'NAME': 'inline label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'GEOIDN': 'no label', });
lyr_StateBoundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});