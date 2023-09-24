import React, { useEffect, useRef, useState } from 'react';
import { eWasteFacilities } from './eWasteData';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

const EwasteMap = ({ userCoordinates }) => {
  const mapDiv = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    // Load the ArcGIS API for JavaScript and create a map
    const loadMap = async () => {
      if (!mapDiv.current) return; // Prevent initializing if the ref is null

      // Create a map with a basemap
      const map = new Map({
        basemap: 'streets',
      });

      // Create a map view
      const mapView = new MapView({
        container: mapDiv.current,
        map,
        center: [-0.09, 51.505], // Default center coordinates
        zoom: 13, // Default zoom level
      });

      // Create a graphics layer for e-waste facilities
      const graphicsLayer = new GraphicsLayer();

      // Add e-waste facility markers to the graphics layer
      eWasteFacilities.forEach((facility) => {
        const point = {
          type: 'point',
          longitude: facility.longitude,
          latitude: facility.latitude,
        };

        const markerSymbol = {
          type: 'simple-marker',
          color: [226, 119, 40], // Orange color
          outline: {
            color: [255, 255, 255], // White color
            width: 2,
          },
        };

        const graphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
          attributes: facility,
        });

        graphicsLayer.add(graphic);
      });

      // Add the graphics layer to the map
      map.add(graphicsLayer);

      // Set the view state
      setView(mapView);
    };

    loadMap();
  }, []); // Only run once on component mount

  useEffect(() => {
    // Update the map view when userCoordinates change
    if (view && userCoordinates) {
      view.goTo({
        center: [userCoordinates.lng, userCoordinates.lat],
        zoom: 15,
      });
    }
  }, [view, userCoordinates]);

  return <div ref={mapDiv} style={{ height: '800px', width: '100%' }} />;
};

export default EwasteMap;
