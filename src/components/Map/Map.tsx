import React, { useRef, useState, useEffect } from "react";
import * as ol from "ol";
import styled from "styled-components";
import { fromLonLat } from "ol/proj";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const MapElement = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
`;

const Map: React.FC<{}> = () => {
  const mapRef = useRef<any>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    let options = {
      target: mapRef.current,
      view: new ol.View({
        zoom: 16,
        center: fromLonLat([126.97328373, 37.56755685]),
      }),
      layers: [
        new Tile({
          source: new OSM(),
        }),
      ],
      controls: [],
      overlays: [],
    };
    let mapObject = new ol.Map(options);

    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, []);

  return <MapElement ref={mapRef}></MapElement>;
};

export default Map;
