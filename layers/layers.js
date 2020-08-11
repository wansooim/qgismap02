var wms_layers = [];

var format_cb_2018_us_state_500k_0 = new ol.format.GeoJSON();
var features_cb_2018_us_state_500k_0 = format_cb_2018_us_state_500k_0.readFeatures(json_cb_2018_us_state_500k_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cb_2018_us_state_500k_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cb_2018_us_state_500k_0.addFeatures(features_cb_2018_us_state_500k_0);
var lyr_cb_2018_us_state_500k_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cb_2018_us_state_500k_0, 
                style: style_cb_2018_us_state_500k_0,
                interactive: true,
    title: 'cb_2018_us_state_500k<br />\
    <img src="styles/legend/cb_2018_us_state_500k_0_0.png" /> 158340391 - 20205125364 <br />\
    <img src="styles/legend/cb_2018_us_state_500k_0_1.png" /> 20205125364 - 106802728188 <br />\
    <img src="styles/legend/cb_2018_us_state_500k_0_2.png" /> 106802728188 - 144661267977 <br />\
    <img src="styles/legend/cb_2018_us_state_500k_0_3.png" /> 144661267977 - 212886221680 <br />\
    <img src="styles/legend/cb_2018_us_state_500k_0_4.png" /> 212886221680 - 1478839695958 <br />'
        });

lyr_cb_2018_us_state_500k_0.setVisible(true);
var layersList = [lyr_cb_2018_us_state_500k_0];
lyr_cb_2018_us_state_500k_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEOIDN': 'GEOIDN', });
lyr_cb_2018_us_state_500k_0.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'GEOIDN': 'Range', });
lyr_cb_2018_us_state_500k_0.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'inline label', 'STUSPS': 'no label', 'NAME': 'inline label', 'LSAD': 'inline label', 'ALAND': 'inline label', 'AWATER': 'inline label', 'GEOIDN': 'no label', });
lyr_cb_2018_us_state_500k_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});