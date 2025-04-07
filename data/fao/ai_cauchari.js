var aicauchari = {
"type": "FeatureCollection",
"name": "ai_cauchari",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "PI Cauchari", "area": 200.047 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -66.858996678973199, -24.127314247244058, 0.0 ], [ -66.869536885321693, -24.138962713204165, 0.0 ], [ -66.879926819180497, -24.130554497803427, 0.0 ], [ -66.866716928132007, -24.121547540451484, 0.0 ], [ -66.858996678973199, -24.127314247244058, 0.0 ] ] ] } }
]
}
// Contenido del popup para cada feature
function popupContentaicauchari(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Nombre :  Area Industrial Cauchari </b>" + "<br>" +
        "<b> Superficie : 200 has</b>" + "<br>" +
        
        "<br>" +
        "<b><i> Fuente de Información:  </b>  EGPAIS<br>" +
        // "<b> Fecha de actualización:  </b> - </i>  "  +
        "</div>"
    )
};