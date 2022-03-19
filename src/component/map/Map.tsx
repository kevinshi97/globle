import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import geoData from '../../data/maps/countries/world.json';
// };

const Map = ({ countries }: any) => {
  
  return (
    <>
      <ComposableMap width={ window.screen.width } height={ window.screen.height/2 }>
          <Geographies geography={geoData}>
            {({ geographies }) => (
            geographies.map(geo => {
                // some territories, not countries, have an iso that is anempty string
                const wasChosen = geo.properties.iso_3166_1_ && countries.includes(geo.properties.iso_3166_1_);
                // if (wasChosen) {
                //   console.log(geo.properties);
                // }
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={wasChosen ? "#E42" : "#D6D6DA"}
                  />
                )
                })
            )}
          </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(Map);