// Contenido del popup para cada feature
function popupContentPsolar(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Nombre :  Parque Solar </b>" + "<br>" +
        "<b> Superficie : mayor a 200 has</b>" + "<br>" +
        
        "<br>" +
        //"<b><i> Fuente de Información:  </b>  EGPAIS<br>" +
        // "<b> Fecha de actualización:  </b> - </i>  "  +
        "</div>"
    )
};

var plantasolar = {
"type": "FeatureCollection",
"name": "plantasolar",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "2", "area": 0.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -66.735272823798653, -24.076723326231786, 0.0 ], [ -66.714399002124992, -24.076937477722367, 0.0 ], [ -66.714339515599875, -24.086098402594757, 0.0 ], [ -66.714363310209933, -24.093322694069059, 0.0 ], [ -66.697973582801751, -24.093436908197305, 0.0 ], [ -66.69796287522729, -24.104610609220174, 0.0 ], [ -66.726040515095974, -24.104325073899361, 0.0 ], [ -66.725945336655798, -24.086526705575864, 0.0 ], [ -66.735266875146181, -24.086401783872986, 0.0 ], [ -66.735272823798653, -24.076723326231786, 0.0 ] ] ] } },
{ "type": "Feature", "properties": { "Name": "planta", "area": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -66.920166025658673, -24.138436021717016 ], [ -66.897647986069742, -24.138436021717016 ], [ -66.897647986069742, -24.156173695359691 ], [ -66.909095704519984, -24.156110795807766 ], [ -66.909158604071905, -24.148562849576841 ], [ -66.920417623866371, -24.148751548232614 ], [ -66.920166025658673, -24.138436021717016 ] ] ] } }
]
}
