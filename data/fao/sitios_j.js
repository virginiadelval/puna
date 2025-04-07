
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
     "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        
        "<b> Provincia: </b>" + feature.properties.provincia + "<br>" +
        "<b> Departamento: </b>" + feature.properties.departamen + "<br>" +
        "<b> Localidad: </b>" + feature.properties.localidad + "<br>" +
        "<b> Total Población (2022): </b>" + feature.properties.personas + "<br>" +
        "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(SitiosSeleccionados)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
 map.on('overlayadd overlayremove', toggleLegend);
}


var sitios = 
{
    "type": "FeatureCollection",
    "name": "puntos",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "link": "66105010", "codpcia": "66", "coddpto": "105", "codloc": "010", "provincia": "Salta", "departamen": "Los Andes", "localidad": "Olacapato", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": "24 07 14", "longitud": "66 42 48", "xgk": 3427468.0, "ygk": 7333439.0, "varones": 108.0, "mujeres": 110.0, "personas": 218.0, "hogares": 39.0, "viv_part_h": 39.0, "viv_part": 57.0 }, "geometry": { "type": "Point", "coordinates": [ -66.714259400038529, -24.119774551599409 ] } },
    { "type": "Feature", "properties": { "link": "66105020", "codpcia": "66", "coddpto": "105", "codloc": "020", "provincia": "Salta", "departamen": "Los Andes", "localidad": "San Antonio de los Cobres", "func_loc": "3", "tiploc": "1", "tip2loc": "0", "latitud": "24 12 38", "longitud": "66 18 53", "xgk": 3468036.0, "ygk": 7323602.0, "varones": 2341.0, "mujeres": 2422.0, "personas": 4763.0, "hogares": 959.0, "viv_part_h": 841.0, "viv_part": 1226.0 }, "geometry": { "type": "Point", "coordinates": [ -66.310978958378882, -24.204189727211411 ] } },
    { "type": "Feature", "properties": { "link": "66105030", "codpcia": "66", "coddpto": "105", "codloc": "030", "provincia": "Salta", "departamen": "Los Andes", "localidad": "Santa Rosa de los Pastos Grandes", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": "24 28 44", "longitud": "66 40 40", "xgk": 3431293.0, "ygk": 7293765.0, "varones": 105.0, "mujeres": 63.0, "personas": 168.0, "hogares": 31.0, "viv_part_h": 31.0, "viv_part": 60.0 }, "geometry": { "type": "Point", "coordinates": [ -66.670683589610078, -24.467416439219967 ] } },
    { "type": "Feature", "properties": { "link": "66105040", "codpcia": "66", "coddpto": "105", "codloc": "040", "provincia": "Salta", "departamen": "Los Andes", "localidad": "Tolar Grande", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": "24 33 31", "longitud": "67 26 10", "xgk": 3354493.0, "ygk": 7284327.0, "varones": 113.0, "mujeres": 117.0, "personas": 230.0, "hogares": 51.0, "viv_part_h": 49.0, "viv_part": 69.0 }, "geometry": { "type": "Point", "coordinates": [ -67.386651477178106, -24.592469701407296 ] } },
    { "type": "Feature", "properties": { "link": null, "codpcia": null, "coddpto": null, "codloc": null, "provincia": "Salta", "departamen": "Los Andes", "localidad": "Pocitos", "func_loc": null, "tiploc": null, "tip2loc": null, "latitud": null, "longitud": null, "xgk": null, "ygk": null, "varones": null, "mujeres": null, "personas": null, "hogares": null, "viv_part_h": null, "viv_part": null }, "geometry": { "type": "Point", "coordinates": [ -66.992561930946508, -24.376304392021012 ] } }
    ]
    }
    
    
