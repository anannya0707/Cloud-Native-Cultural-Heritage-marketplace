import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";

// GeoJSON for India states
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const IndiaMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div style={{ textAlign: "center" }}>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000 }}>
       <Geographies geography={geoUrl}>
  {({ geographies }: { geographies: any[] }) =>
    geographies.map((geo: any) => {
      const stateName = geo.properties.ST_NM;

      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          onMouseEnter={() => setHoveredState(stateName)}
          onMouseLeave={() => setHoveredState(null)}
          onClick={() => alert(`You clicked ${stateName}`)}
          style={{
            default: {
              fill:
                hoveredState === stateName
                  ? "#6366f1"
                  : "#1e293b",
              outline: "none",
            },
            hover: {
              fill: "#818cf8",
              outline: "none",
              cursor: "pointer",
            },
            pressed: {
              fill: "#4f46e5",
              outline: "none",
            },
          }}
        />
      );
    })
  }
</Geographies>
      </ComposableMap>

      {/* Hover label */}
      {hoveredState && (
        <p style={{ marginTop: "20px", color: "white" }}>
          📍 {hoveredState}
        </p>
      )}
    </div>
  );
};

export default IndiaMap;