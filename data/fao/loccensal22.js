var IconLocCab = {
    radius: 6,
    fillColor: "#7a0177",
    color: "#fff",
    weight: 0.5,
    opacity: 1,
    fillOpacity: 0.8
};

// Contenido del popup para cada feature
function popupContentLocCab(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.localidad + "<br>" +
         "<b> Total habitantes : </b>" + feature.properties.personas + "<br>" +
        "<b> Tipo de asentamiento: </b>" + feature.properties.tiploc + "<br>" +

        "<br>" +
        "<b><i> Fuente de Información:  </b>  INDEC - Censo 2022<br>" +
     //   "<b> Fecha de actualización:  </b> - </i>  "  +
        "</div>"
    )
};


// Función para generar la leyenda
function createLegendLocCab() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];

        // Array con los estilos y sus etiquetas correspondientes
        var styles = [
            { label: 'Localidades', color: '#7a0177' },
            { label: 'Parajes', color: '#807dba' },
            
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
    if (map.hasLayer(Parajes)) {
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



var locCabecera =

{
    "type": "FeatureCollection",
    "name": "polcensal",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "link": "38084010", "codpcia": "38", "coddpto": "084", "codloc": "010", "provincia": "Jujuy", "departamen": "Susques", "localidad": "Catua", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": "23 51 37", "longitud": "67 00 04", "xgk": 3398019.0, "ygk": 7362070.0, "varones": 186.0, "mujeres": 241.0, "personas": 427.0, "hogares": 79.0, "viv_part_h": 56.0, "viv_part": 89.0 }, "geometry": { "type": "Point", "coordinates": [ -67.005275192133922, -23.869787829219792 ] } },
    { "type": "Feature", "properties": { "link": "38084055", "codpcia": "38", "coddpto": "084", "codloc": "055", "provincia": "Jujuy", "departamen": "Susques", "localidad": "Olacapato", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": null, "longitud": null, "xgk": 0.0, "ygk": 0.0, "varones": 20.0, "mujeres": 25.0, "personas": 45.0, "hogares": 16.0, "viv_part_h": 13.0, "viv_part": 17.0 }, "geometry": { "type": "Point", "coordinates": [ -66.718650869400207, -24.115280550780305 ] } },
    { "type": "Feature", "properties": { "link": "66105010", "codpcia": "66", "coddpto": "105", "codloc": "010", "provincia": "Salta", "departamen": "Los Andes", "localidad": "Olacapato", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": "24 07 14", "longitud": "66 42 48", "xgk": 3427468.0, "ygk": 7333439.0, "varones": 108.0, "mujeres": 110.0, "personas": 218.0, "hogares": 39.0, "viv_part_h": 39.0, "viv_part": 57.0 }, "geometry": { "type": "Point", "coordinates": [ -66.714259400038529, -24.119774551599409 ] } },
    { "type": "Feature", "properties": { "link": "66105020", "codpcia": "66", "coddpto": "105", "codloc": "020", "provincia": "Salta", "departamen": "Los Andes", "localidad": "San Antonio de los Cobres", "func_loc": "3", "tiploc": "1", "tip2loc": "0", "latitud": "24 12 38", "longitud": "66 18 53", "xgk": 3468036.0, "ygk": 7323602.0, "varones": 2341.0, "mujeres": 2422.0, "personas": 4763.0, "hogares": 959.0, "viv_part_h": 841.0, "viv_part": 1226.0 }, "geometry": { "type": "Point", "coordinates": [ -66.315435998094031, -24.209931002963778 ] } },
    { "type": "Feature", "properties": { "link": "66105030", "codpcia": "66", "coddpto": "105", "codloc": "030", "provincia": "Salta", "departamen": "Los Andes", "localidad": "Santa Rosa de los Pastos Grandes", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": "24 28 44", "longitud": "66 40 40", "xgk": 3431293.0, "ygk": 7293765.0, "varones": 105.0, "mujeres": 63.0, "personas": 168.0, "hogares": 31.0, "viv_part_h": 31.0, "viv_part": 60.0 }, "geometry": { "type": "Point", "coordinates": [ -66.678540066759183, -24.478105777315999 ] } },
    { "type": "Feature", "properties": { "link": "66105040", "codpcia": "66", "coddpto": "105", "codloc": "040", "provincia": "Salta", "departamen": "Los Andes", "localidad": "Tolar Grande", "func_loc": "0", "tiploc": "1", "tip2loc": "0", "latitud": "24 33 31", "longitud": "67 26 10", "xgk": 3354493.0, "ygk": 7284327.0, "varones": 113.0, "mujeres": 117.0, "personas": 230.0, "hogares": 51.0, "viv_part_h": 49.0, "viv_part": 69.0 }, "geometry": { "type": "Point", "coordinates": [ -67.436965367535933, -24.557985194476458 ] } }
    ]
    }
    

    