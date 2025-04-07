// con VAR se crean las capas basese a visualizar => L.tileLayer.wms es la propiedad que tare los TileLayer y/o wms //
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	maxZoom: 18
});

var google = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	opacity: 1.0,
	attribution: '&copy;<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Google</a>',
	maxZoom: 18
});
var argenmap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
	opacity: 1.0,
	attribution: '<a href="https://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2"  target="_blank"> ArgenMap </a>',
	maxZoom: 18,
});

var Provincia = L.geoJSON(prov, {
	style: SytleProv
});

var Localidad = L.geoJSON(locCabecera, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocCab);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocCab(feature);
		layer.bindPopup(content);
	}
});
var Parajes = L.geoJSON(locSec, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocSec);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocSec(feature);
		layer.bindPopup(content);
	}
});

var POBIndigena = L.geoJSON(pobInd, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconPobInd);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPobInd(feature);
		layer.bindPopup(content);
	}
});




//Datos de Localidades con Proyectos de Agua, Estandarizado y No Estandarizado - Generado a partir del Excel con todos los proyectos.
var ProyecAgua = L.geoJSON(proyectos,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptions);

		},
		style: styleProyectos,
		onEachFeature: function (feature, layer) {
			var content = popupContentProyectos(feature);
			layer.bindPopup(content);
		}
	});

// Data poblacional, del año 2022 por departamento. Tomado de: https://portalgeoestadistico.indec.gob.ar/?indicator_id=37&members=108
var DataCenso = L.geoJSON(censo,
	{
		style: styleCenso,
		onEachFeature: function (feature, layer) {
			var content = popupContentCenso(feature);
			layer.bindPopup(content);
		}
	});

///Dapto con Arsenicos segun el Ministerio de Salud en 2006 https://www.argentina.gob.ar/sites/default/files/2006_epidemiologia_del_hacre_en_argentina.pdf
var DeptoArsenico = L.geoJSON(dptoArsenico,
	{
		style: styleDptoArsenico,
		onEachFeature: function (feature, layer) {
			var content = popupContentDptoArsenico(feature);
			layer.bindPopup(content);
		}
	});

///Daptos del IGN
var RegionesHirdo = L.geoJSON(RegionHidrogeografica,
	{
		style: styleRegionHidro,
		onEachFeature: function (feature, layer) {
			var content = popupContentRegionHidro(feature);
			layer.bindPopup(content);
		}
	}
);

///Dapto IGN
var CuencasHidro = L.geoJSON(cuencasSist,
	// {
	// 	 style: styleRegionHidro,

	// }
);

var SitiosSeleccionados = L.geoJSON(sitios,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptionsSitios,
			);

		},
		style: MarkerOptionsSitios,
		onEachFeature: function (feature, layer) {
			var content = popupContentSitios(feature);
			layer.bindPopup(content);
		}

	}
);



var SuelosTipo = L.geoJSON(suelos,
	{
		style: styleSuelos,
		onEachFeature: function (feature, layer) {
			var content = popupContentSuelos(feature);
			layer.bindPopup(content);
		}
	}
);

var Ecoregion = L.geoJSON(ecorregion,
	{
		style: styleEco,
		onEachFeature: function (feature, layer) {
			var content = popupContentEcoregion(feature);
			layer.bindPopup(content);
		}
	}
);


var AreasProtegidas = L.geoJSON(areasprotegidas,
	{
		style: styleAreas,
		onEachFeature: function (feature, layer) {
			var content = popupContentAreas(feature);
			layer.bindPopup(content);
		}
	}
);


var DataIso = L.geoJSON(isohietas,
	{
		style: styleIso,
		onEachFeature: function (feature, layer) {
			var content = popupContentIso(feature);
			layer.bindPopup(content);
		}
	}
);


var RNacional = L.geoJSON(rutanacional,
	{
		style:
		{
			fillColor: '#F06509FF',
			weight: 3,
			opacity: 1,
			color: '#F0D909FF',
			dashArray: '0',
			fillOpacity: 0.0
		},
	}
);

var RProvincial = L.geoJSON(rutaprovincial,
	{
		style:
		{
			fillColor: '#F06509FF',
			weight: 3,
			opacity: 1,
			color: '#853704FF',
			dashArray: '0',
			fillOpacity: 0.0
		},
	}
);

var FFcc14 = L.geoJSON(ffcc,
	{
		style:
		{
			fillColor: '#F06509FF',
			weight: 3,
			opacity: 1,
			color: '#EE5A2DFF',
			dashArray: '2, 4',
			fillOpacity: 0.0
		},
	}
);
var AreaIndustria = L.geoJSON(aicauchari,
	{
		style:
		{
			fillColor: '#F06509FF',
			weight: 3,
			opacity: 1,
			color: '#F06509FF',
			dashArray: 0,
			fillOpacity: 0.8
		},
		onEachFeature: function (feature, layer) {
			var content = popupContentaicauchari(feature);
			layer.bindPopup(content);
		}
	}
);

var TendidoElectrico = L.geoJSON(electrico,
	{
		style:
		{
			fillColor: '#F06509FF',
			weight: 3,
			opacity: 1,
			color: '#F06509FF',
			dashArray: 0,
			fillOpacity: 0.8
		},
		onEachFeature: function (feature, layer) {
			var content = popupContentElectrico(feature);
			layer.bindPopup(content);
		}
	}
);

var PlantaSolar = L.geoJSON(plantasolar,
	{
		style:
		{
			
			fillColor: '#09F009FF',
			weight: 2,
			opacity: 1,
			color: '#1A581AFF',
			dashArray: 0,
			fillOpacity: 0.9
		},
		onEachFeature: function (feature, layer) {
			var content = popupContentPsolar(feature);
			layer.bindPopup(content);
		}
	}
);