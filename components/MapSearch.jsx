import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import getCenter from "geolib/es/getCenter";

const MapSearch = ({ searchResult }) => {
	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResult.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		longitude: center.longitude,
		latitude: center.latitude,
		zoom: 11,
	});

	console.log(selectedLocation);

	return (
		<Map
			mapStyle="mapbox://styles/hamno/clc54873a001n14pknut0n22e"
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onMouseMove={(onMouseMove) => setViewport(onMouseMove)}>
			{searchResult.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
						onClick={() => setSelectedLocation(result)}></Marker>

					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</Map>
	);
};

export default MapSearch;
